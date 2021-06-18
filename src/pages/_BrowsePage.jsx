import React from 'react'
// import { useQuery } from 'react-query'
// import { useFuse } from '../hooks'
// import { getTestData, fuseOptions } from '../utilities/request'
import { request } from '../utilities'
import { SwiperRow } from '../components'
import { InfoModalContextProvider } from '../contexts/providers'
import { DarkStyle } from '../themes'
import {
	BrowseNavBarContainer,
	SpotlightBannerContainer,
	RowResultsContainer,
	FooterContainer
} from '../containers'

const BrowsePage = () => {
	// const { isLoading, error, data } = useQuery('testData', getTestData)
	// const { search, handleSearch, results } = useFuse(data, fuseOptions)
	// const navBarProps = { search, handleSearch }
	// const resultsProps = { results }

	// if (isLoading) return <Status.Loading />
	// if (error) return <Status.Errors error={ error } />

	return (
		<>
			<DarkStyle />
			<BrowseNavBarContainer />
			<SpotlightBannerContainer request={ request.spotlight } />
			{/* { (data.length === results.length) && <SpotlightBannerContainer /> } */}
			{/* { data && results && <ResultsContainer { ...resultsProps } /> } */}
			<InfoModalContextProvider>
				<SwiperRow>
					<RowResultsContainer title="Netflix Originals" request={ request.original } mediaType="tv" isLargeRow={ true } />
					<RowResultsContainer title="Top Rated" request={ request.topRated } isTopRatedRow={ true } />
					{/* <RowResultsContainer title="Trending" /> */}
				</SwiperRow>
			</InfoModalContextProvider>
			<FooterContainer />
		</>
	)
}

export default BrowsePage
