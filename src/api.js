import axios from 'axios'

const apiUrl = 'https://swapi.co/api/'

export const HTTP = axios.create({
  baseURL: apiUrl,
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': `application/json`
  }
})

export const getPeople = () => {
  return new Promise((resolve, reject) => {
    let id = null
    let max = 0
    HTTP.get('/people/').then(response => {
      max = response.data.count
      id = Math.floor(Math.random() * max)
    }).then(() => {
      return HTTP.get(`/people/${id}`)
        .then(response => ((response.status < 300) ? resolve : reject)(response))
        .catch(error => reject(error.response))
    })
  })
}

export const getStarship = () => {
  return new Promise((resolve, reject) => {
    let id = null
    let max = 0
    HTTP.get('/starships/').then(response => {
      max = response.data.count
      id = Math.floor(Math.random() * max)
    }).then(() => {
      return HTTP.get(`/starships/${id}`)
        .then(response => ((response.status < 300) ? resolve : reject)(response))
        .catch(error => reject(error.response))
    })
  })
}
