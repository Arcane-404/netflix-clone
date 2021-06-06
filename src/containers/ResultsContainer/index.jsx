import React from 'react'
import { useQuery } from 'react-query'
import { v4 as uuid } from 'uuid'
import { Content, Card } from '../../components'
import { useFuse } from '../../hooks'
import { Loading, Errors, getData, fuseOptions } from './request'
// import tempData from '../../json/tempData'

const ResultsContainer = () => {
	const { isLoading, error, data } = useQuery('tempData', getData)
	const { search, handleSearch, results } = useFuse(data, fuseOptions)

	// if (isLoading && !data) console.log('loading', isLoading)
	// if (error) console.log('error', error)
	// if (!data) console.log('data', data)

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
						value={ search }
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
