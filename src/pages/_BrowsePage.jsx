import React from 'react'
import { BrowseNavBarContainer, BrowseBannerContainer } from '../containers'

const BrowsePage = () => {
	return (
		<>
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
