const { REACT_APP_TMDB_API_KEY } = process.env

export const BASE_URL = 'https://api.themoviedb.org/3'
// export const BASE_QUERY = { api_key: REACT_APP_TMDB_API_KEY }

export const api_key = REACT_APP_TMDB_API_KEY
export const append_to_response = 'images,videos,release_dates,credits'
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
export const YT_VIDEO_URL = 'https://www.youtube.com/embed/'
export const IMDB_URL = 'https://www.imdb.com/title'

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
