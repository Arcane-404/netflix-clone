import axios from 'axios'

export const Loading = () => (
	<h1>loading — <span role="img" aria-label="load">🔃</span></h1>
)

export const Errors = (error = { message: 'unknown' }) => (
	<>
		<h1>error — <span role="img" aria-label="error">📛</span></h1>
		<p>{ error.message }</p>
	</>
)


// const url = BASE_URL + PATHS + QUERIES

export const getData = () => (
	axios.get('/tempData.json').then(response => response.data)
)

export const fuseOptions = {
	keys: [ 'title', 'author' ]
	// includeScore: true
}

// export const queryOptions = {
//   staleTime: 2000,
//   cacheTime: 10,
//   onSuccess: () => console.log('hit that')
// 	staleTime: Infinity
// }
