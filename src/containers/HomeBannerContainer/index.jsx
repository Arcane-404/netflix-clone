import React from 'react'
import { HomeNavBarContainer, SignupFormContainer } from '../'
import { Banner } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Banner>
			<HomeNavBarContainer />

			<Banner.Inner>
				<Banner.Title>{ home.banner.title }</Banner.Title>
				<Banner.SubTitle>{ home.banner.subtitle }</Banner.SubTitle>
				<SignupFormContainer />
			</Banner.Inner>

			<Banner.Image src={ home.banner.img } alt={ home.banner.alt } />
		</Banner>
	)
}

export default HomeBannerContainer
