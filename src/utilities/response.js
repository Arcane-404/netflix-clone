const IMAGE_URL = 'https://image.tmdb.org/t/p'
const YT_VIDEO_URL = 'https://www.youtube.com/embed/'
const IMDB_URL = 'https://www.imdb.com/title'

export const imageLink = (img, path = '/w500/') => IMAGE_URL + path + img
export const videoLink = key => YT_VIDEO_URL + key
export const imdbLink = id => IMDB_URL + id

export const getScore = val => +(`${val}`).replace('.','')
export const getYear = val => new Date(val).getFullYear()
export const getDuration = val => `${ Math.floor(val / 60) }h ${ val % 60 }m`
export const getMaturity = val => (
	val.find(item => item.iso_3166_1 === 'US')
	.release_dates.find(item => item.certification).certification
)

export const infoResults = data => ({
	id: data.id,
	title: data.title,
	score: getScore(data.vote_average),
	year: getYear(data.release_date),
	genres: data.genres.map(item => item.name),
	duration: getDuration(data.runtime),
	maturity: getMaturity(data.release_dates.results),
	links: {
		homepage: data.homepage,
		imbd: imdbLink(data.imdb_id),
		youtube: videoLink(data.videos.results[0].key)
	},
	copy: {
		tagline: data.tagline,
		description: data.overview
	},
	images: {
		backdrop: imageLink(data.backdrop_path),
		poster: imageLink(data.poster_path)
	}
})
