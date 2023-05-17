class MainApi {
  constructor({ link }) {
    this._link = link;
  }

  _getResponseData(response) {
    if (!response.ok) {
      // return Promise.reject(`Ошибка: ${response.status}`);
      return Promise.reject(response.status);
    }
    return response.json()
  }

  signin({ email, password }) {
    return fetch(this._link + '/signin', {
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
    return fetch(this._link + '/signup', {
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

    return fetch(this._link + '/users/me', {
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

  setUserInfo({ name, email }) {
    // TODO подумать как прикрутить куки
    const jwt = localStorage.getItem('jwt');

    return fetch(this._link + '/users/me', {
      headers: {
        "Content-Type": "application/json",
        // "Cookie": cookie,
        "Authorization": `Bearer ${jwt}`
      },
      method: "PATCH",
      body: JSON.stringify(
        {
          "email": `${email}`,
          "name": `${name}`,
        }
      )
    })
      .then(response => {
        return this._getResponseData(response);
      })
  }

  getMovies() {
    // TODO подумать как прикрутить куки
    const jwt = localStorage.getItem('jwt');

    return fetch(this._link + '/movies', {
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

  addMovie(movie) {
    const jwt = localStorage.getItem('jwt');

    return fetch(this._link + '/movies', {
      headers: {
        "Content-Type": "application/json",
        // "Cookie": cookie,
        "Authorization": `Bearer ${jwt}`
      },
      method: "POST",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co` + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co` + movie.image.url,
        movieId: movie.id,
      })
    })
      .then(response => {
        return this._getResponseData(response);
      })
  }

  deleteMovie(id) {
    const jwt = localStorage.getItem('jwt');

    return fetch(this._link + '/movies/' + id, {
      headers: {
        "Content-Type": "application/json",
        // "Cookie": cookie,
        "Authorization": `Bearer ${jwt}`
      },
      method: "DELETE"
    })
      .then(response => {
        return this._getResponseData(response);
      })
  }
}

// TODO поменять перед деплоем
export const exampleMainApi = new MainApi({ link: 'http://api.movies.andreysapo.nomoredomains.monster' })