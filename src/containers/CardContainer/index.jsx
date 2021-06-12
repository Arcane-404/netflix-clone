import React, { useState } from 'react'
// import axios from 'axios'
import { Card } from '../../components'
import { InfoModalContainer } from '../'
import { getElementSize, imageLink } from '../../utilities'
// import { getId } from '../../utilities'

// const CardContainer = ({ isLargeRow, item, ...cardProps }) => {
const CardContainer = ({ isLargeRow, item }) => {

	const [ info, setInfo ] = useState(null)
	const [ isHover, setHover ] = useState(false)
	const [ position, setPosition ] = useState(null)

	const itemImage = item.images[(isLargeRow ? 'poster' : 'backdrop' )]

	const showInfoModal = (e) => {
		console.log('HOVER IN')
		const axis = getElementSize(e)

		// console.log('axis', axis)
		// console.log('test', axis.left + axis.right)
		// console.log('window', window.innerWidth)

		const [ posX, posY ] = [
			axis.x + window.scrollX,
			axis.y + window.scrollY
		]
		// console.log(position)
		setInfo(item)
		setHover(true)
		setPosition(axis)
	}

	const cardProps = {	'data-id': item.id, onMouseEnter: showInfoModal }
	const modalProps = { info, setHover, position }

	return (
		<>
			<Card { ...cardProps }>
				{ !isLargeRow && <Card.Title>{ item.title }</Card.Title> }
				<Card.Image	src={ imageLink(itemImage) } alt={ item.title } />
			</Card>

			{ isHover && info && <InfoModalContainer { ...modalProps } /> }
		</>
	)
}

export default CardContainer
