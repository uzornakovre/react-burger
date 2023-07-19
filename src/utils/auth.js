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

  register(email, password, name) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name })
    }).then(res => res.json()); // Не использую здесь _checkStatus, чтобы в Register
  }                             // через условие получить ответ с сервера и передать

  login(email, password) {
    return fetch(`${this._url}/auth/login`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    }).then(this._checkStatus)
      .then(data => data);
  }

  // checkToken(token) {
  //   return fetch(`${this._url}/users/me`, {
  //     headers: {
  //       ...this._headers,
  //       'Authorization': `Bearer ${token}`
  //     }
  //   }).then(this._checkStatus)
  //     .then(data => data);
  // }
}

export const auth = new Auth({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});