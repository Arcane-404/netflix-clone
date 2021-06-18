import React from 'react'
import { Card } from '../../components'
import { InfoModalConsumer } from '../../contexts/consumers'

const CardContainer = ({ item, mediaType, isLargeRow }) => {

	const { openInfoModal } = InfoModalConsumer()
	const itemImage = item.images[isLargeRow ? 'poster' : 'backdrop']
	const cardProps = {
		'data-id': item.id,
		onMouseEnter: e => openInfoModal(e, mediaType, item.id)
	}

	return (
		<Card { ...cardProps }>
			{ !isLargeRow && <Card.Title>{ item.title }</Card.Title> }
			<Card.Image	src={ itemImage } alt={ item.title } />
		</Card>
	)
}

export default CardContainer
