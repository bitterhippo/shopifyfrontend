const key = '537af063'
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${key}`


export default {
  async GetOneByTittle(title, callback) {

    let data = JSON.stringify({
      email: accountName,
      password: passWord,
    });

    let requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": " application/json"
      },
      body: data,
    };

    let request = fetch(API, requestOptions)
      .then(response => response.text())
      .then(response => console.log(response))
      .then(result => {
        callback({})
      })
      .catch((err) => console.log(err))

    return request;
  }
}

