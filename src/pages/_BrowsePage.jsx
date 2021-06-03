import React from 'react'
import { BrowseNavBarContainer, BrowseBannerContainer } from '../containers'

const BrowsePage = () => {
	return (
		<>
			<BrowseNavBarContainer />
			<BrowseBannerContainer />
			{/*
			- CardOneContainer
			- CardTwoContainer
			- FooterContainer
			*/}
			<div style={{ height: '100vh', background: '#333' }}></div>
		</>
	)
}

export default BrowsePage
