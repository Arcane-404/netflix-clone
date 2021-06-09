import React from 'react'
import { HomeNavBarContainer, HeroBannerContainer, JumbotronContainer, FooterContainer } from '../containers'

const HomePage = () => {
	return (
		<>
			<HomeNavBarContainer />
			<HeroBannerContainer />
			<JumbotronContainer />
			<FooterContainer />
			{/*
			- AboutUsContainer
			- FaqContainer
			- SignupFormConatainer
			*/}
		</>
	)
}

export default HomePage
