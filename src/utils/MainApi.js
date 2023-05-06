class MainApi {
  constructor({ link }) {
    this.link = link;
  }

  _getResponseData(response) {
    if (!response.ok) {
      // return Promise.reject(`Ошибка: ${response.status}`);
      return Promise.reject(response.status);
    }
    return response.json()
  }

  signin({ email, password }) {
    return fetch(this.link + '/signin', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(
        {
          "email": `${email}`,
          "password": `${password}`
        }
      )
    })
      .then(response => {
        return this._getResponseData(response)
      })
  }

  signup({ email, password, name }) {
    return fetch(this.link + '/signup', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(
        {
          "email": `${email}`,
          "password": `${password}`,
          "name": `${name}`,
        }
      )
    })
      .then(response => {
        return this._getResponseData(response);
      })
  }

  getUserInfo() {
    // TODO подумать как прикрутить куки
    const jwt = localStorage.getItem('jwt');

    return fetch(this.link + '/users/me', {
      headers: {
        "Content-Type": "application/json",
        // "Cookie": cookie,
        "Authorization": `Bearer ${jwt}`
      },
      method: "GET",
    })
      .then(response => {
        return this._getResponseData(response);
      })
  }

}

export const exampleMainApi = new MainApi({ link: 'http://localhost:3001' })