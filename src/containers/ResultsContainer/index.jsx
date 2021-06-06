import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { v4 as uuid } from 'uuid'
import Fuse from 'fuse.js'
import { Content, Card } from '../../components'
import { Loading, Errors, getData, fuseOptions } from './request'
// import tempData from '../../json/tempData'

const ResultsContainer = () => {
	const [ query, setQuery ] = useState('')
	const [ results, setResults ] = useState([])
	const { isLoading, error, data } = useQuery('tempData', getData)

	// if (isLoading && !data) console.log('loading', isLoading)
	// if (error) console.log('error', error)
	// if (!data) console.log('data', data)

	const handleSearch = useCallback(
		e => setQuery(e.target.value),
		[ setQuery ]
	)

	useEffect(() => {
		// console.log('data', data)
		if (data) {
			const fuse = new Fuse(data, fuseOptions)
			const fuzzy = query && fuse.search(query).map(result => result.item)
			console.log(query.length, fuzzy.length, data.length)
			if (fuzzy.length) setResults(fuzzy)
 			if (!query) setResults(data)
		}
	}, [ query, data ])

	if (isLoading) return <Loading />
	if (error) return <Errors />

	return (
		<Content>
			<Content.Wrapper>
				<div>
					<input
						type="search"
						id="search"
						list="search-options"
						autoComplete="off"
						value={ query }
						onChange={ handleSearch }
					/>
				</div>

				<Content.Test>
					<Content.Box>
						{ data && results && results.map(item => (
							<Card key={ uuid() }>
								<Card.ImageBox>
									<Card.Image src={ item.image } alt={ item.author } />
								</Card.ImageBox>

								<Card.TextBox>
									<Card.Title>{ item.title }</Card.Title>
								</Card.TextBox>
							</Card>
						))}
					</Content.Box>
				</Content.Test>
			</Content.Wrapper>
		</Content>
	)
}

export default ResultsContainer
