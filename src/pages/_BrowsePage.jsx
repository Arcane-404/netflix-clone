import React from 'react'
// import { useQuery } from 'react-query'
import { BrowseNavBarContainer, SpotlightBannerContainer, RowResultsContainer, FooterContainer } from '../containers'
// import { Status } from '../components'
// import { useFuse } from '../hooks'
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
			{ (true) && (
				<>
					<RowResultsContainer title="Netflix Originals" isLgRow={ true } />
					<RowResultsContainer title="TBD Specials" />
				</>
			)}
			<FooterContainer />
		</>
	)
}

export default BrowsePage
