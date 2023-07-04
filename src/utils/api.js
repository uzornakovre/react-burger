import { baseUrl } from "./constants";

class Api {
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

  getIngredients() {
    return fetch(`${this._url}/ingredients`, {
      headers: {
        ...this._headers,
      }
    }).then(this._checkStatus)
  }

  sendOrderData(data) {
    return fetch(`${this._url}/orders`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        ingredients: data,
      })
    }).then(this._checkStatus)
  }
}

export const api = new Api({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});