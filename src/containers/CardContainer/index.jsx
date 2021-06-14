import React, { useState } from 'react'
import { Card } from '../../components'
import { InfoModalContainer } from '../../containers'
import { getElementSize, imageLink, getCardData, infoResults } from '../../utilities'

const CardContainer = ({ item, mediaType, isLargeRow }) => {

	const [ info, setInfo ] = useState(null)
	const [ isHover, setHover ] = useState(false)
	const [ position, setPosition ] = useState(null)

	const itemTitle = (mediaType === 'movie') ? item.title : item.name
	const itemImage = item[`${ isLargeRow ? 'poster' : 'backdrop' }_path`]

	const getInfoData = async (id) => {
		if (info && info.id === id) return setHover(true)
		const path = `/${ mediaType }/${ id }`

		try {
			const infoData = await getCardData(path, null, mediaType)
			const results = await infoResults(infoData, mediaType)
			// console.log(results)
			setInfo(results)
			setHover(true)
		} catch (error) {
			console.error(error)
		}
	}

	const showInfoModal = (e) => {
		console.log('HOVER IN')
		const axis = getElementSize(e)
		setPosition(axis)
		getInfoData(item.id)
	}

	const cardProps = {	'data-id': item.id, onMouseEnter: showInfoModal }
	const modalProps = { info, setHover, position }

	return (
		<>
			<Card { ...cardProps }>
				{ !isLargeRow && <Card.Title>{ itemTitle }</Card.Title> }
				<Card.Image	src={ imageLink(itemImage) } alt={ itemTitle } />
			</Card>

			{ isHover && info && <InfoModalContainer { ...modalProps } /> }
		</>
	)
}

export default CardContainer
