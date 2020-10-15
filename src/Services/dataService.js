import axios from 'axios'


export default {
  getShows: () => {
    const url = `http://api.tvmaze.com/shows`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query) => {
    const url =  `http://api.tvmaze.com/search/shows?q=${query}`
    return axios.get(url).then(info => info.data)
  },
  getShowById: (showId) => {
    const url = `http://api.tvmaze.com/shows/${showId}`
    return axios.get(url).then(info => info.data)
  }
}
