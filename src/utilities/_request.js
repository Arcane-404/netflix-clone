import { stringify } from 'querystringify'
import axios from 'axios'
import { BASE_URL, api_key, append_to_response, NETFLIX } from './_options'

const requestLink = (path = '', query = '') => (
	BASE_URL + path + stringify({ api_key, ...query }, true)
)

export const request = {
	spotlight: requestLink('/movie/latest', { append_to_response }),
	original: requestLink('/discover/tv', { with_networks: NETFLIX }),
	trending: requestLink('/all/week'),
	topRated: requestLink('/movie/top_rated')
}

/*  */

export const getData = url => (
	axios.get(url).then(response => response.data)
)

export const getSearchData = (path = '', query = {}) => {
	const url = requestLink(path, { append_to_response, ...query })
	return axios.get(url).then(response => response.data)
}

/*  */

// const testData = { path: '/data/movies.json' }
// const urlPopularMovies = requestLink('/movie/popular')
// const urlUpcomingMovies = requestLink('/movie/upcoming')
// const urlTopRatedMovies = requestLink('/movie/top_rated')
// const urlSearchMovies = requestLink('/movie/popular', '&query=furious')

// export const getTestData = (path = '', query = {}) => {
// 	const url = testData.path
// 	const url = requestLink(path, query)
// 	return axios.get(url).then(response => response.data.results)
// }
