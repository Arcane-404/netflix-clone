import React from 'react'
import { Jumbotron } from '../../components'
import data from '../../json/_jumbotron.json'

const JumbotronContainer = () => {
	return (
		<Jumbotron>
			{data.map( (d, i) => (
				<Jumbotron.Frame key={ i }>
					<Jumbotron.Inner direction={ d.direction }>

						<Jumbotron.ContentFrame>
							<Jumbotron.Title>
								{ d.title }
							</Jumbotron.Title>
							<Jumbotron.Subtitle>
								{ d.subtitle }
							</Jumbotron.Subtitle>
						</Jumbotron.ContentFrame>

						<Jumbotron.ImageFrame>
							<Jumbotron.Image src={ d.img } alt="image" />
						</Jumbotron.ImageFrame>

					</Jumbotron.Inner>
				</Jumbotron.Frame>
			))}
		</Jumbotron>
	)
}

export default JumbotronContainer
