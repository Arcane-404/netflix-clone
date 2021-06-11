import React from 'react'
import { v4 as uuid } from 'uuid'
import { Jumbotron } from '../../components'
import { jumbotron } from '../../json'

const JumbotronContainer = () => {
	return (
		<Jumbotron>
			{ jumbotron.map(content => (
				<Jumbotron.Frame key={ uuid() }>
					<Jumbotron.Inner direction={ content.direction }>
						<Jumbotron.ContentFrame>
							<Jumbotron.Title>{ content.title }</Jumbotron.Title>
							<Jumbotron.Subtitle>{ content.subtitle }</Jumbotron.Subtitle>
						</Jumbotron.ContentFrame>

						<Jumbotron.ImageFrame>
							<Jumbotron.Image src={ content.img } alt={ content.alt } />
						</Jumbotron.ImageFrame>
					</Jumbotron.Inner>
				</Jumbotron.Frame>
			))}
		</Jumbotron>
	)
}

export default JumbotronContainer
