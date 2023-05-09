class MoviesApi {
  constructor({ link }) {
    this._link = link
  }

  _getResponseData(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json()
  }

  getMovies() {
    return fetch(this._link)
      .then(response => {
        return this._getResponseData(response);
      })
  }
}

export const exampleMoviesApi = new MoviesApi({ link: 'https://api.nomoreparties.co/beatfilm-movies' })