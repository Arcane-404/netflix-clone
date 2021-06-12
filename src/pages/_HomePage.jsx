import React from 'react'
import {
	HomeNavBarContainer,
	HeroBannerContainer,
	JumbotronContainer,
	FaqContainer,
	FooterContainer
} from '../containers'

const HomePage = () => {
	return (
		<>
			<HomeNavBarContainer />
			<HeroBannerContainer />
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	)
}

export default HomePage
