import axios from 'axios'

export const baseURL = 'http://api.tvmaze.com/'

export default {
  getShows: () => {
    const url = `${baseURL}shows`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query) => {
    const url =  `${baseURL}search/shows?q=${query}`
    return axios.get(url).then(info => info.data)
  },
  getShowById: (showId) => {
    const url = `${baseURL}shows/${showId}`
    return axios.get(url).then(info => info.data)
  }
}
