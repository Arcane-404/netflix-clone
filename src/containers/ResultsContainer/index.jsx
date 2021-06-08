import React from 'react'
import { v4 as uuid } from 'uuid'
import { Content, Card } from '../../components'
import { imageLink } from '../../utilities/request'

const ResultsContainer = ({ results }) => {
	return (
		<Content test>
			<Content.Wrapper test>
				<Content.Test>
					<Content.Box test>
						{ (!results.length)
							? 'no matches found'
							: results.map(item => (
								<Card key={ uuid() }>
									<Card.ImageBox title={ item.title }>
										<Card.ImageTitle>{ item.title }</Card.ImageTitle>
										<Card.Image src={ imageLink(item.backdrop_path) } alt={ item.original_title } />
									</Card.ImageBox>
								</Card>
							))}
					</Content.Box>
				</Content.Test>
			</Content.Wrapper>
		</Content>
	)
}

export default ResultsContainer
