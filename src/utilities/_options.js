export const baseURL = 'https://api.themoviedb.org/3'
export const api_key = process.env.REACT_APP_TMDB_API_KEY
export const movieExt = 'images,videos,release_dates,external_ids'
export const tvShowExt = 'images,videos,content_ratings,external_ids'
export const NETFLIX = 213

// with_genres
export const genres = {
	action: 28,
	comedy: 35,
	horror: 27,
	romance: 10749,
	documentary: 99
}

/*  */

export const IMAGE_URL = 'https://image.tmdb.org/t/p'
export const YT_VIDEO_URL = 'https://www.youtube.com'
export const IMDB_URL = 'https://www.imdb.com/title/'
export const TMDB_URL = 'https://www.themoviedb.org'

/*  */

export const fuseOptions = {
	keys: [ 'title', 'author' ]
	// includeScore: true
}

export const queryOptions = {
	staleTime: 2000,
	cacheTime: 10,
	onSuccess: () => console.log('hit that')
	// staleTime: Infinity
}

const HoursInMinutes = (hr = 24) => 1000 * 60 * 60 * hr
export const queryClientOptions = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnmount: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: HoursInMinutes()
		}
	}
}

export const dataOptions = (query = {}) => ({
	params: { api_key, ...query }
})

export const resultOptions = (query = {}, type = 'movie') => {
	const append_to_response = (type === 'movie') ? movieExt : tvShowExt
	return { params: { api_key, append_to_response, ...query } }
}

export const discoverOptions = (page = 1) => ({
	params: {
		api_key,
		page,
		'vote_average.gte': 7.5,
		'primary_release_date.gte': 2020
	}
})
