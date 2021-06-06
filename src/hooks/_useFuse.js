import { useCallback, useEffect, useState } from 'react'
import Fuse from 'fuse.js'

const useFuse = (data, fuseOptions) => {
	const [ query, setQuery ] = useState('')
	const [ results, setResults ] = useState([])

	const handleSearch = useCallback(e => setQuery(e.target.value), [ setQuery ])

	useEffect(() => {
		console.log('data', data)
		if (data) {
			const fuse = new Fuse(data, fuseOptions)
			const fuzzy = query && fuse.search(query).map(result => result.item)
			// console.log(query.length, fuzzy.length, data.length)
			if (fuzzy.length && query.length > 3) setResults(fuzzy)
 			if (!query && !fuzzy.length) setResults(data)
		}
	}, [ query, data, fuseOptions ])

	return {
		search: query,
		setSearch: setQuery,
		handleSearch,
		results
	}
}

export default useFuse
