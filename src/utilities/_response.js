import { IMAGE_URL, YT_VIDEO_URL, IMDB_URL, TMDB_URL } from './_options'
import { randomArrChoice } from './_helpers'

export const imdbLink = id => IMDB_URL + id
export const tmdbLink = (id, path = '/movie/') => TMDB_URL + path + id
export const imageLink = (img, path = '/w500') => IMAGE_URL + path + img
export const videoLink = (key, path = '/embed/') => YT_VIDEO_URL + path + key
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
const getCertification = (val, mediaType = 'movie') => {
	let certification = val.find(item => item.iso_3166_1 === 'US')
	if (!certification) return undefined
	if (mediaType === 'movie') return certification
	.release_dates.find(item => item.certification)?.certification
	else return certification.rating
}
const getDescription = (val) => {
	const [ SHORT, LONG ] = [ 100, 170 ]
	const sentences = val.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|') || val.split('.')
	const isTooShort = sentences[0].length < SHORT
	let sentence = isTooShort ? (sentences[0] + ' ' + sentences[1]) : sentences[0]
	const isTooLong = sentence.length > LONG
	sentence = isTooLong ? sentence.slice(0, 170).replace(/\b(\w+)\W*$/g, '...') : sentence
	return sentence
}

/*  */

export const generalResults = data => ({
	id: data.id,
	title: data.title || data.name,
	images: {
		backdrop: imageLink(data.backdrop_path),
		poster: imageLink(data.poster_path)
	}
})

export const infoResults = (
	data, mediaType = 'movie', imageOptions = false
) => {

	const hasVideos = data.videos.results.length
	const images = imageOptions && {
		backdrop: {
			sm: randomArrChoice(data.images.backdrops).file_path,
			lg: randomArrChoice(data.images.backdrops).file_path
		},
		poster: {
			sm: randomArrChoice(data.images.posters).file_path,
			lg: randomArrChoice(data.images.posters).file_path
		}
	}

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
			description: getDescription(data.overview)
		},
		videos: (hasVideos)
			? {
				embed: videoLink(data.videos.results[0].key),
				direct: videoLink(data.videos.results[0].key, '/watch?v=')
			}
			: { search: searchVideo(data.title || data.name) },
		images: (imageOptions)
			? {
				backdrop: {
					sm: imageLink(images.backdrop.sm, '/w780'),
					lg: imageLink(images.backdrop.lg, '/w1280')
				},
				poster: {
					sm: imageLink(images.poster.sm),
					lg: imageLink(images.poster.lg, '/w780')
				}
			}
			: {
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
