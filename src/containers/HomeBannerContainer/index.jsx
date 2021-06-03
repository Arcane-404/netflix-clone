import React from 'react'
import { SignupFormContainer } from '../'
import { Hero } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Hero>
			<Hero.Inner>
				<Hero.Title>{ home.banner.title }</Hero.Title>
				<Hero.SubTitle>{ home.banner.subtitle }</Hero.SubTitle>

				<SignupFormContainer />
			</Hero.Inner>

			<Hero.ImageBox>
				<Hero.Image src={ home.banner.img } alt={ home.banner.alt } />
			</Hero.ImageBox>
		</Hero>
	)
}

export default HomeBannerContainer
