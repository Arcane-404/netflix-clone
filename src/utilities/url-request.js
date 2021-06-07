const YT_VIDEO_URL = 'https://www.youtube.com/embed/' + key
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/' + img

const BASE_URL = 'https://api.themoviedb.org/3'
const API_QUERY = `?api_key=${ REACT_APP_TMDB_API_KEY }`

export const requestLink = (path = '', query = '') => BASE_URL + path + API_QUERY + query
export const imageLink = img => IMAGE_URL + img
export const videoLink = key => YT_VIDEO_URL + key

const urlPopularMovies = requestLink('/movie/popular')
const urlUpcomingMovies = requestLink('/movie/upcoming')
const urlTopRatedMovies = requestLink('/movie/top_rated')
const urlSearchMovies = requestLink('/movie/popular', '&query=furious')
