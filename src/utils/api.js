import { baseUrl } from "./constants";
import { getCookie, setCookie, deleteCookie } from "./cookies";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => Promise.reject(err));
  }
};

export const refreshToken = () => {
  return fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers,
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
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

export const fetchUserInfo = (token) => {
  return fetchWithRefresh(`${baseUrl}/auth/user`, {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  });
};

export const register = (email, password, name) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const login = (email, password) => {
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

export const fetchUpdateUserInfo = (data) => {
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

export const getResetCode = (email) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  })
    .then(checkResponse)
    .then((data) => data);
};

export const resetPassword = (password, token) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers,
    body: JSON.stringify({ password, token }),
  })
    .then(checkResponse)
    .then((data) => data);
};

export const logout = (token) => {
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
}

export const fetchSendOrderData = (data) => {
  return fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ingredients: data,
    })
  }).then(checkResponse)
}


// class Api {
//   constructor({ baseUrl, headers }) {
//     this._url = baseUrl;
//     this._headers = headers;
//   }

//   _checkStatus(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       return Promise.reject(`Ошибка: ${res.status}`);
//     }
//   }

//   getIngredients() {
//     return fetch(`${this._url}/ingredients`, {
//       headers: {
//         ...this._headers,
//       }
//     }).then(this._checkStatus)
//   }

//   sendOrderData(data) {
//     return fetch(`${this._url}/orders`, {
//       method: 'POST',
//       headers: {
//         ...this._headers,
//       },
//       body: JSON.stringify({
//         ingredients: data,
//       })
//     }).then(this._checkStatus)
//   }
// }

// export const api = new Api({
//   baseUrl,
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });