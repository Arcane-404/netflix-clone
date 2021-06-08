import axios from 'axios'
const { REACT_APP_TMDB_API_KEY } = process.env

export const fuseOptions = {
	keys: [ 'title', 'author' ]
	// includeScore: true
}

// export const queryOptions = {
//   staleTime: 2000,
//   cacheTime: 10,
//   onSuccess: () => console.log('hit that')
// 	staleTime: Infinity
// }

const BASE_URL = 'https://api.themoviedb.org/3'
const API_QUERY = `?api_key=${ REACT_APP_TMDB_API_KEY }`
const BASE_QUERY = API_QUERY + '&append_to_response=videos,image'

const YT_VIDEO_URL = 'https://www.youtube.com/embed/'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/'

export const requestLink = (path = '', query = '') => BASE_URL + path + BASE_QUERY + query
export const imageLink = img => IMAGE_URL + img
export const videoLink = key => YT_VIDEO_URL + key

const testData = { path: '/data/movies.json' }
// const urlPopularMovies = requestLink('/movie/popular')
// const urlUpcomingMovies = requestLink('/movie/upcoming')
// const urlTopRatedMovies = requestLink('/movie/top_rated')
// const urlSearchMovies = requestLink('/movie/popular', '&query=furious')

export const getTestData = () => (
	axios.get(testData.path).then(response => response.data.results)
)
