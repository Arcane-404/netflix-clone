import React, { useState } from 'react'
import { SearchBar } from '../../components'
import { useMediaQuery } from '../../hooks'

const targetSibling = e => e.currentTarget.nextElementSibling

const SearchBarContainer = ({ search, handleSearch }) => {

	const [ inFocus, setInFocus ] = useState(false)
	const isDesktop = useMediaQuery('desktop')
	const placeholder = (isDesktop) ? 'Title, people, genres' : 'Search'

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!search) return
	}

	const handleClick = (e) => {
		targetSibling(e).focus()
		if (!inFocus) setInFocus(!inFocus)
	}

	const handleBlur = (e) => {
		console.log('blur', !search, inFocus)
		return !search && setInFocus(!inFocus)
	}

	const handleFocus = e => setInFocus(true)

	const searchBarProps = {
		onSubmit: handleSubmit,
		onFocus: handleFocus,
		inFocus: inFocus,
		onBlur: handleBlur
	}

	return (
		<SearchBar { ...searchBarProps }>
			{ isDesktop && <SearchBar.Icon onClick={ handleClick } /> }

			<SearchBar.Input
				placeholder={ placeholder }
				value={ search }
				onChange={ handleSearch }
			/>
		</SearchBar>
	)
}

export default SearchBarContainer
