import React from 'react'
import { GeneralNavBarContainer, SignupFormContainer } from '../'
import { Fold, Jumbotron } from '../../components'
import { home } from '../../json'

const HomeBannerContainer = () => {
	return (
		<Fold>
			<GeneralNavBarContainer />
			<Jumbotron>
				<Jumbotron.Inner>
					<Jumbotron.Title>{ home.banner.title }</Jumbotron.Title>
					<Jumbotron.SubTitle>{ home.banner.subtitle }</Jumbotron.SubTitle>
					<Jumbotron.Image src={ home.banner.img } alt={ home.banner.alt } />
					<SignupFormContainer />
				</Jumbotron.Inner>
			</Jumbotron>
		</Fold>
	)
}

export default HomeBannerContainer
