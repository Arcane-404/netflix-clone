import React from 'react'
import { SignupFormContainer } from '../'
import { Hero } from '../../components'
import { banner } from '../../json'

const HeroBannerContainer = () => {
	return (
		<Hero>
			<Hero.Inner>
				<Hero.Title>{ banner.title }</Hero.Title>
				<Hero.SubTitle>{ banner.subtitle }</Hero.SubTitle>

				<SignupFormContainer />
			</Hero.Inner>

			<Hero.ImageBox>
				<Hero.Image src={ banner.img } alt={ banner.alt } />
			</Hero.ImageBox>
		</Hero>
	)
}

export default HeroBannerContainer
