import React, { useState } from 'react'
import { SearchBar } from '../components'

const SearchBarContainer = () => {

	const [ search, setSearch ] = useState('')

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<SearchBar>
			<SearchBar.Input
				placeholder="Search"
				value={ search }
				onChange={ handleChange }
			/>
			{/* <SearchBar.Icon /> */}
		</SearchBar>
	)
}

export default SearchBarContainer
