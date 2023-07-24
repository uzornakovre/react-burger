import { baseUrl } from "./constants";

class Auth {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo(token) {
    return fetch(`${this._url}/auth/user`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkStatus);
  }

  register(email, password, name) {
    return fetch(`${this._url}/auth/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    }).then((res) => res.json());
  }

  login(email, password) {
    return fetch(`${this._url}/auth/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkStatus)
  }

  updateUserInfo(data) {
    console.log(data)
    const { name, email, password, token } = data;
    return fetch(`${this._url}/auth/user`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkStatus);
  }

  getResetCode(email) {
    return fetch(`${this._url}/password-reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email }),
    })
      .then(this._checkStatus)
      .then((data) => data);
  }

  resetPassword(password, token) {
    return fetch(`${this._url}/password-reset/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ password, token }),
    })
      .then(this._checkStatus)
      .then((data) => data);
  }

  refreshToken(token) {
    return fetch(`${this._url}/auth/token`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ token }),
    }).then(this._checkStatus);
  }

  logout(token) {
    return fetch(`${this._url}/auth/logout`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ token }),
    }).then(this._checkStatus);
  }
}

export const auth = new Auth({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
