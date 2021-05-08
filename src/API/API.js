const key = '537af063'

export default {

  async GetOneByTitle(title) {

    let API = `http://www.omdbapi.com/?t=${title}&apikey=${key}`

    let requestOptions = {
      method: 'GET'
    };

    let request = fetch(API, requestOptions)
      .then(response => response.text())
      .then(response => console.log(response))
      .catch((err) => console.log(err))

    return request;
  }

}

