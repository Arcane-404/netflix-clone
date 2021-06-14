import { IMAGE_URL, YT_VIDEO_URL, IMDB_URL, TMDB_URL } from './_options'

export const imageLink = (img, path = '/w500') => IMAGE_URL + path + img
export const videoLink = (key, path = '/embed/') => YT_VIDEO_URL + path + key
export const imdbLink = id => IMDB_URL + id
export const tmdbLink = (id, path = '/movie/') => TMDB_URL + path + id
export const searchVideo = key => (
	YT_VIDEO_URL + '/results?search_query=' + key.replace(/\s/g, '+')
)

/*  */

const getScore = val => Math.floor(val / Math.pow(0.1, 1))
const getYear = val => new Date(val).getFullYear()
const getDuration = (val, mediaType = 'movie') => (
	(mediaType === 'movie')
		? `${ Math.floor(val / 60) }h ${ val % 60 }m`
		: `${ val } Season` + ((val > 1) ? 's' : '')
)
const getCertification = (val, mediaType = 'movie') => (
	(mediaType === 'movie')
		? val.find(item => item.iso_3166_1 === 'US')
		.release_dates.find(item => item.certification)?.certification
		: val.find(item => item.iso_3166_1 === 'US').rating
)

export const infoResults = (data, mediaType = 'movie') => {
	const hasVideos = data.videos.results.length

	const sameDataOutput = {
		id: data.id,
		score: getScore(data.vote_average),
		genres: data.genres.map(item => item.name),
		links: {
			homepage: data.homepage,
			imdb: imdbLink(data.external_ids.imdb_id),
			tmdb: tmdbLink(data.id, `/${ mediaType }/`)
		},
		copy: {
			tagline: data.tagline,
			description: data.overview
		},
		videos: (hasVideos)
			? {
				embed: videoLink(data.videos.results[0].key),
				direct: videoLink(data.videos.results[0].key, '/watch?v=')
			}
			: { search: searchVideo(data.title || data.name) },
		images: {
			backdrop: imageLink(data.backdrop_path),
			poster: imageLink(data.poster_path)
		}
	}

	if (mediaType === 'movie') return {
		...sameDataOutput,
		title: data.title,
		year: getYear(data.release_date),
		duration: getDuration(data.runtime),
		certification: getCertification(data.release_dates.results)
	}

	if (mediaType === 'tv') return {
		...sameDataOutput,
		title: data.name,
		year: getYear(data.first_air_date),
		duration: getDuration(data.number_of_seasons, mediaType),
		certification: getCertification(data.content_ratings.results, mediaType)
	}
}
