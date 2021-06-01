import React from 'react'
import { HomeNavBarContainer, SignupFormContainer } from '../'
import { Jumbotron } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Jumbotron>
			<HomeNavBarContainer />

			<Jumbotron.Inner>
				<Jumbotron.Title>{ home.banner.title }</Jumbotron.Title>
				<Jumbotron.SubTitle>{ home.banner.subtitle }</Jumbotron.SubTitle>
				<SignupFormContainer />
			</Jumbotron.Inner>

			<Jumbotron.Image src={ home.banner.img } alt={ home.banner.alt } />
		</Jumbotron>
	)
}

export default HomeBannerContainer
