import React from 'react'
import { SearchBar } from '../components'
import { useMediaQuery, useInput } from '../custom'

/*
- shrink search bar
- click/focus
	- grow & show search bar
*/

const SearchBarContainer = () => {
	const [ search, handleChange ] = useInput('')
	const isDesktop = useMediaQuery('desktop')
	const placeholder = (isDesktop) ? 'Title, people, genres' : 'Search'

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('HELL the SEARCH')
	}

	return (
		<SearchBar onSubmit={ handleSubmit }>
			{ isDesktop && <SearchBar.Icon /> }
			<SearchBar.Input
				placeholder={ placeholder }
				value={ search }
				onChange={ handleChange }
			/>
		</SearchBar>
	)
}

export default SearchBarContainer
