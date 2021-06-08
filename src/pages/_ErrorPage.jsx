import React from 'react'
import { Content, Card } from '../components'
import { imageLink } from '../utilities/request'
import card from '../json/temp'
const { item } = card

const ErrorPage = () => {
	return (
		<Content test full>
			<Content.Box test full>
				<Content.Test box>
					<Card hover>
						<Card.ImageBox>
							<Card.Title>{ item.title }</Card.Title>
							<Card.Image src={ imageLink(item.backdrop_path) } alt={ item.original_title } />
						</Card.ImageBox>

						<Card.Body>
							<Card.ControlBox>
								<Card.Button primary> <Card.Play /> </Card.Button>
								<Card.Button secondary> <Card.Save /> </Card.Button>
								<Card.Button secondary last> <Card.MoreInfo /> </Card.Button>
							</Card.ControlBox>

							<Card.MetaInfo>
								<Card.Info score>90% Score</Card.Info>
								<Card.Info year>2021</Card.Info>
								<Card.Info maturity>PG</Card.Info>
								<Card.Info duration>1h 2m</Card.Info>
								<Card.Info hdBadge>HD</Card.Info>
							</Card.MetaInfo>

							<Card.MetaTags>
								<Card.Tag>Quirky</Card.Tag>
								<Card.Tag>Heartfelt</Card.Tag>
								<Card.Tag>Fantasy</Card.Tag>
							</Card.MetaTags>
						</Card.Body>
					</Card>
				</Content.Test>
			</Content.Box>
		</Content>
	)
}

export default ErrorPage
