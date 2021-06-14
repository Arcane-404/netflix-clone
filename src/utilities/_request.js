// import { stringify } from 'querystringify'
import axios from 'axios'
import { baseURL, api_key,movieExt, tvShowExt , NETFLIX } from './_options'

const api = axios.create({ baseURL })

const getRowData = (path = '', query = {}) => {
	const axiosOptions = { params: { api_key, ...query } }
	return api.get(path, axiosOptions).then(response => response.data.results)
}

// spotlight: () => requestLink('/movie/latest', { append_to_response: movieExt })
// spotlight: requestLink('/movie/latest', { append_to_response }),
export const request = {
	original: () => getRowData('/discover/tv', { with_networks: NETFLIX }),
	// trending: requestLink('/all/week'),
	topRated: () => getRowData('/movie/top_rated')
}

/*  */

export const getData = url => (
	axios.get(url).then(response => response.data)
)

export const getCardData = (path = '', query = {}, mediaType = 'movie') => {
	const append_to_response = (mediaType === 'movie') ? movieExt : tvShowExt
	const axiosOptions = { params: { api_key, append_to_response, ...query } }
	return api.get(path, axiosOptions).then(response => response.data)
}

export const getSearchData = (path = '', query = {}, mediaType = 'movie') => {
	const append_to_response = (mediaType === 'movie') ? movieExt : tvShowExt
	const url = requestLink(path, { append_to_response, ...query })
	return axios.get(url).then(response => response.data)
}

/*  */

// const testData = { path: '/data/movies.json' }
// const requestLink = (path = '', query = '') => (
// BASE_URL + path + stringify({ api_key, ...query }, true)
// )
