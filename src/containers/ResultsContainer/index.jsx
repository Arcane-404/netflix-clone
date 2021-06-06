import React from 'react'
import { v4 as uuid } from 'uuid'
import { Content, Card } from '../../components'

const ResultsContainer = ({ results }) => {
	return (
		<Content>
			<Content.Wrapper>
				<Content.Test>
					<Content.Box>
						{ results.map(item => (
							<Card key={ uuid() }>
								<Card.ImageBox>
									<Card.Image src={ item.image } alt={ item.author } />
								</Card.ImageBox>

								<Card.TextBox>
									<a href={ item.url } target="_blank" rel="noopener noreferrer">
										<Card.Title>{ item.title }</Card.Title>
									</a>
								</Card.TextBox>
							</Card>
						))}
					</Content.Box>
				</Content.Test>
			</Content.Wrapper>
		</Content>
	)
}

export default ResultsContainer
