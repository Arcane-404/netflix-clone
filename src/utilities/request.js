import { stringify } from 'querystringify'
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
const BASE_QUERY = {
	api_key: REACT_APP_TMDB_API_KEY,
	append_to_response: 'images,videos,release_dates,credits'
}

export const requestLink = (path = '', query = '') => (
	BASE_URL + path + stringify({ ...BASE_QUERY, ...query }, true)
)

const testData = { path: '/data/movies.json' }
// const urlPopularMovies = requestLink('/movie/popular')
// const urlUpcomingMovies = requestLink('/movie/upcoming')
// const urlTopRatedMovies = requestLink('/movie/top_rated')
// const urlSearchMovies = requestLink('/movie/popular', '&query=furious')

export const getTestData = (path = '', query = {}) => {
	const url = testData.path
	// const url = requestLink(path, query)
	return axios.get(url).then(response => response.data.results)
}

export const getData = (path = '', query = {}) => {
	const url = requestLink(path, query)
	return axios.get(url).then(response => response.data)
}
