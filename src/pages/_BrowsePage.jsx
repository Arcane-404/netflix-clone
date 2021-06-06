import React from 'react'
import { useQuery } from 'react-query'
import { BrowseNavBarContainer, SpotlightBannerContainer, ResultsContainer, FooterContainer } from '../containers'
import { Loading, Errors, getData, fuseOptions } from '../utilities/request'
import { useFuse } from '../hooks'

const BrowsePage = () => {
	const { isLoading, error, data } = useQuery('tempData', getData)
	const { search, handleSearch, results } = useFuse(data, fuseOptions)
	const navBarProps = { search, handleSearch }
	const resultsProps = { results }

	if (isLoading) return <Loading />
	if (error) return <Errors />

	return (
		<>
			<BrowseNavBarContainer { ...navBarProps } />
			{ (data.length === results.length) && <SpotlightBannerContainer /> }
			{ data && results.length && <ResultsContainer { ...resultsProps } /> }
			<FooterContainer />
		</>
	)
}

export default BrowsePage
