import React from 'react'
import { NavBarContainer, SignupFormContainer } from '../'
import { Fold, Jumbotron } from '../../components'
import content from './content'

const HomeBannerContainer = () => {
	return (
		<Fold>
			<NavBarContainer />
			<Jumbotron>
				<Jumbotron.Title>{ content.banner.title }</Jumbotron.Title>
				<Jumbotron.Subtitle>{ content.banner.subtitle }</Jumbotron.Subtitle>
				<SignupFormContainer />
			</Jumbotron>
		</Fold>
	)
}

export default HomeBannerContainer
