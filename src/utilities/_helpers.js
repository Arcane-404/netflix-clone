// const lazyload = (path, time) => new Promise(resolve => setTimeout(() => resolve( require(path) ), time))
// const HomePage = lazy(() => lazyload('./pages/_HomePage', 3000))
export const print = console.log
export const getId = e => e.currentTarget.dataset.id
export const getElementSize = e => e.currentTarget.getBoundingClientRect()
