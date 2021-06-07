import { useCallback, useMemo, useEffect, useState } from 'react'
import Fuse from 'fuse.js'

const useFuse = (data, options) => {
	const [ query, setQuery ] = useState('')
	const [ results, setResults ] = useState([])

	const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options
	const fuse = useMemo(() => new Fuse(data, fuseOptions), [ data, fuseOptions ])
	const handleSearch = useCallback(e => setQuery(e.target.value), [ setQuery ])

	useEffect(() => {
		// console.log('data', data)
		if (!data) return
		const fuzzy = query && fuse.search(query).map(result => result.item)
		if (fuzzy.length !== results.length && query.length > 3) return setResults(fuzzy)
		if (!query && !fuzzy.length) return setResults(data)
		// }
	}, [ data, fuse, query, results, fuseOptions ])

	return {
		search: query,
		setSearch: setQuery,
		handleSearch,
		results
	}
}

export default useFuse
