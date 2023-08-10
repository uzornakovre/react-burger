import { baseUrl, headers } from "./constants";
import { getCookie, setCookie, deleteCookie } from "./cookies";

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err: any) => Promise.reject(err));
  }
};

export const refreshToken = () => {
  return fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers,
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (
  url: string,
  options: IRequestOptions
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired" || err.message === "jwt maloformed") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      setCookie("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken.split("Bearer ")[1]);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      Promise.reject(err);
    }
  }
};

export const fetchUserInfo = (token: string) => {
  return fetchWithRefresh(`${baseUrl}/auth/user`, {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  });
};

export const register = (email: string, password: string, name: string) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const login = (email: string, password: string) => {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
    });
};

export const fetchUpdateUserInfo = (data: TUserInfo & { token?: string }) => {
  const { name, email, password, token } = data;
  return fetch(`${baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const getResetCode = (email: string) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  })
    .then(checkResponse)
    .then((data) => data);
};

export const resetPassword = (password: string, token: string) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ password, token }),
  })
    .then(checkResponse)
    .then((data) => data);
};

export const logout = (token?: string) => {
  return fetch(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers,
    body: JSON.stringify({ token }),
  })
    .then(checkResponse)
    .then(() => {
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    });
};

export const fetchIngredients = () => {
  return fetch(`${baseUrl}/ingredients`, {
    headers,
  }).then(checkResponse);
};

export const fetchSendOrderData = (data: Array<string>) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      ingredients: data,
    }),
  }).then(checkResponse);
};
