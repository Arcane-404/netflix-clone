import axios from 'axios'
import { getMediaType, randomArrChoice, randomRange } from './_helpers'
import { generalResults, infoResults } from './_response'
import { baseURL, NETFLIX, dataOptions, discoverOptions, resultOptions } from './_options'

// const testData = { path: '/data/movies.json' }
// const requestLink = (path = '', query = '') => (
// BASE_URL + path + stringify({ api_key, ...query }, true)
// )

const api = axios.create({ baseURL })

const getSpotlightData = async () => {
	const mediaTypes = getMediaType()
	const type = randomArrChoice(mediaTypes)
	const randomPage = randomRange(1,3)

	const discoverOpt = discoverOptions(randomPage)
	const resultOpt = resultOptions(null, type)

	try {
		const discoverPath = `/discover/${ type }`
		const response = await api.get(discoverPath, discoverOpt)
		const result = randomArrChoice(response.data.results)
		const resultPath = `/${ type }/${ result.id }`
		const { data } = await api.get(resultPath, resultOpt)
		const info = infoResults(data, type, true)
		return info
	} catch (error) {
		console.error(error)
	}
}

const getRowData = async (path = '', query = {}) => {
	const dataOpt = dataOptions(query)
	try {
		const response = await api.get(path, dataOpt)
		const data = response.data.results.map(generalResults)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getCardData = async (path = '', query = {}) => {
	const type = getMediaType(path)
	const resultOpt = resultOptions(query, type)
	try {
		const response = await api.get(path, resultOpt)
		const data = infoResults(response.data, type)
		// console.log(data)
		return data
	} catch (error) {
		console.error(error)
	}
}

// export const getSearchData = (path = '', query = {}, mediaType = 'movie') => {
// 	const append_to_response = (mediaType === 'movie') ? movieExt : tvShowExt
// 	const url = requestLink(path, { append_to_response, ...query })
// 	return axios.get(url).then(response => response.data)
// }

export const getData = url => (
	axios.get(url).then(response => response.data)
)

/*  */

export const request = {
	spotlight: () => getSpotlightData(),
	original: () => getRowData('/discover/tv', { with_networks: NETFLIX }),
	topRated: () => getRowData('/movie/top_rated')
}
