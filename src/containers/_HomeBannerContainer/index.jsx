import React from 'react'
import { GeneralNavBarContainer, SignupFormContainer } from '../'
import { Fold, Jumbotron } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Jumbotron>
			<GeneralNavBarContainer />

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
