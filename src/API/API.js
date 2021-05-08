const key = '537af063'

export default {

  async GetOneByTitle(title, callback) {

    let API = `http://www.omdbapi.com/?t=${title}&apikey=${key}`

    let requestOptions = {
      method: 'GET'
    };

    let request = fetch(API, requestOptions)
      .then(response => response.text())
      .then(response => JSON.parse(response))
      .then(response => callback(response))
      .catch((err) => console.log(err))

    return request;
  }

}

