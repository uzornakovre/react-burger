import { baseUrl, headers } from "./constants";
import { getCookie, setCookie, deleteCookie } from "./cookies";

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err: any) => Promise.reject(err));
  }
};

export const refreshToken = (): Promise<TRefreshResponse> => {
  return fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers,
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then((res) => checkResponse<TRefreshResponse>(res));
};

export const fetchWithRefresh = async <T>(
  url: RequestInfo,
  options: RequestInit
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err: any) {
    if (err.message === "jwt expired" || err.message === "jwt maloformed") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      setCookie("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken.split("Bearer ")[1]);
      (options.headers as { [key: string]: string }).authorization =
        refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } else {
      Promise.reject(err);
    }
  }
};

export const fetchUserInfo = async (token: string) => {
  const data = await fetchWithRefresh<TUserInfoResponse>(
    `${baseUrl}/auth/user`,
    {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }
  );
  return data?.success ? data.user : Promise.reject(data);
};

export const register = (
  email: string,
  password: string,
  name: string
): Promise<TAuthResponse> => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password, name }),
  }).then((res) => checkResponse<TAuthResponse>(res));
};

export const login = (email: string, password: string): Promise<unknown> => {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse<TAuthResponse>(res))
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
  })
    .then((res) => checkResponse<TAuthResponse>(res))
    .then((data) => {
      return data?.success ? data.user : Promise.reject(data);
    });
};

export const getResetCode = (email: string): Promise<TResMessage> => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  }).then((res) => checkResponse<TResMessage>(res));
};

export const resetPassword = (
  password: string,
  token: string
): Promise<TResMessage> => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ password, token }),
  }).then((res) => checkResponse<TResMessage>(res));
};

export const logout = (token?: string): Promise<unknown> => {
  return fetch(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers,
    body: JSON.stringify({ token }),
  })
    .then((res) => checkResponse<TResMessage>(res))
    .then(() => {
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    });
};

export const fetchIngredients = () => {
  return fetch(`${baseUrl}/ingredients`, {
    headers,
  })
    .then((res) => checkResponse<TIngredientsResponse>(res))
    .then((data) => {
      return data?.success ? data.data : Promise.reject(data);
    });
};

export const fetchSendOrderData = (data: Array<string>) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then((res) => checkResponse<TOrderResponse>(res))
    .then((data) => {
      return data?.success ? data : Promise.reject(data);
    });
};
