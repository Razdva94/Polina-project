class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  postCardToServer(name, email, service, message) {
    const requestBody = {
      name,
      email,
      service,
      ...(message !== "" && { message }),
    };

    return this._request(`${this._url}/send-info`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(res);
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: "https://polinamdesign.ru/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
