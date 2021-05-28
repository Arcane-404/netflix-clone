import React from 'react'
import { NavBarContainer, SignupFormContainer } from '../'
import { Fold, Jumbotron } from '../../components'
import { banner } from './content'

const HomeBannerContainer = () => {
	return (
		<Fold>
			<NavBarContainer />
			<Jumbotron>
				<Jumbotron.Inner>
					<Jumbotron.Title>{ banner.title }</Jumbotron.Title>
					<Jumbotron.Subtitle>{ banner.subtitle }</Jumbotron.Subtitle>
					<Jumbotron.Image src={ banner.img } alt="banner-image" />
					<SignupFormContainer />
				</Jumbotron.Inner>
			</Jumbotron>
		</Fold>
	)
}

export default HomeBannerContainer
