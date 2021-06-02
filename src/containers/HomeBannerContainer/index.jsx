import React from 'react'
import { HomeNavBarContainer, SignupFormContainer } from '../'
import { Hero } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Hero>
			<HomeNavBarContainer />

			<Hero.Inner>
				<Hero.Title>{ home.banner.title }</Hero.Title>
				<Hero.SubTitle>{ home.banner.subtitle }</Hero.SubTitle>
				<SignupFormContainer />
			</Hero.Inner>

			<Hero.Image src={ home.banner.img } alt={ home.banner.alt } />
		</Hero>
	)
}

export default HomeBannerContainer
