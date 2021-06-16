import React from 'react'
import { DarkStyle } from '../themes'
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
			<DarkStyle />
			<HomeNavBarContainer />
			<HeroBannerContainer />
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	)
}

export default HomePage
