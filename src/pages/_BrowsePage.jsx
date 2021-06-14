import React from 'react'
// import { useQuery } from 'react-query'
// import { useFuse } from '../hooks'
import { request } from '../utilities'
// import { Status } from '../components'
import {
	BrowseNavBarContainer,
	SpotlightBannerContainer,
	RowResultsContainer,
	FooterContainer
} from '../containers'
// import { getTestData, fuseOptions } from '../utilities/request'

const BrowsePage = () => {
	// const { isLoading, error, data } = useQuery('testData', getTestData)
	// const { search, handleSearch, results } = useFuse(data, fuseOptions)
	// const navBarProps = { search, handleSearch }
	// const resultsProps = { results }

	// if (isLoading) return <Status.Loading />
	// if (error) return <Status.Errors error={ error } />

	return (
		<>
			<BrowseNavBarContainer />
			{/* <BrowseNavBarContainer { ...navBarProps } /> */}
			{/* { (data.length === results.length) && <SpotlightBannerContainer /> } */}
			{/* { data && results && <ResultsContainer { ...resultsProps } /> } */}
			{ (false) && (
				<>
					<RowResultsContainer title="Netflix Originals" request={ request.original } mediaType="tv" isLargeRow={ true } />
					<RowResultsContainer title="Top Rated" request={ request.topRated } isTopRatedRow={ true } />
					{/* <RowResultsContainer title="Trending" /> */}
				</>
			)}
			<FooterContainer />
		</>
	)
}

export default BrowsePage
