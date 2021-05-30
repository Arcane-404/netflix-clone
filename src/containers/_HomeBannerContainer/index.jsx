import React from 'react'
import { GeneralNavBarContainer, SignupFormContainer } from '../'
import { Fold, Jumbotron } from '../../components'
import { banner } from './content'

const HomeBannerContainer = () => {
	return (
		<Fold>
			<GeneralNavBarContainer />
			<Jumbotron>
				<Jumbotron.Inner>
					<Jumbotron.Title>{ banner.title }</Jumbotron.Title>
					<Jumbotron.SubTitle>{ banner.subtitle }</Jumbotron.SubTitle>
					<Jumbotron.Image src={ banner.img } alt={ banner.alt } />
					<SignupFormContainer />
				</Jumbotron.Inner>
			</Jumbotron>
		</Fold>
	)
}

export default HomeBannerContainer
