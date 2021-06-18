// const lazyload = (path, time) => new Promise(resolve => setTimeout(() => resolve( require(path) ), time))
// const HomePage = lazy(() => lazyload('./pages/_HomePage', 3000))
export const print = console.log
export const getMediaType = (path = null) => {
	if (path) return (path).match(/(movie|tv)/g)[0]
	else return [ 'movie', 'tv' ]
}
export const getId = e => e.currentTarget.dataset.id
export const getBound = e => e.currentTarget.getBoundingClientRect()
export const randomArrChoice = arr => arr[ Math.floor(Math.random() * arr.length) ]
export const randomRange = (min, max, opt) => {
	// MIN <= N < MAX
	if (typeof min !== 'number') return 0
	if (typeof max === 'undefined') {
		max = min
		min = 0
	}

	const diff = max - min + (opt ? 1 : 0)
	return Math.floor((Math.random() * diff + min))
}
