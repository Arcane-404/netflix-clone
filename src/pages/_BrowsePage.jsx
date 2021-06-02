import React from 'react'
import { CardsContainer, BrowseNavBarContainer, BrowseBannerContainer } from '../containers'

const BrowsePage = () => {
	return (
		<>
			{/* <CardsContainer /> */}
			<BrowseNavBarContainer />
			<BrowseBannerContainer />
			{/*
			- BrowseNavBarContainer
			- BrowseBannerContainer
			- CardOneContainer
			- CardTwoContainer
			- FooterContainer
			*/}
			<div style={{ height: '100vh', background: 'lightgray' }}></div>
		</>
	)
}

export default BrowsePage
