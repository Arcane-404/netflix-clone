import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid'
import { Modal } from '../../components'
import { imageLink } from '../../utilities'

const InfoModalContainer = ({ info, setHover, position }) => {
	const [ isFarLeft, setFarLeft ] = useState(false)
	const [ isFarRight, setFarRight ] = useState(false)
	const [ posX, setPosX ] = useState(0)
	const [ posY, setPosY ] = useState(0)

	const infoImage = imageLink(info.images.backdrop)

	const hideInfoModal = () => {
		console.log('HOVER OUT')
		setHover(false)
	}

	const videoOption = info.videos.direct || info.videos.search
	const goToVideo = () => window.open(videoOption, '_blank')
	const goToSource = () => window.open(info.links.homepage, '_blank')
	const goToIMDB = () => window.open(info.links.imdb, '_blank')
	const goToTMDB = () => window.open(info.links.tmdb, '_blank')

	useEffect(() => {
		const doesPassLeftViewPort = position.width - position.left > window.screenLeft
		const doesPassRightViewPort = position.right  + position.width > window.innerWidth
		const isWithinViewPort = !doesPassLeftViewPort && !doesPassRightViewPort

		if (posY !== position.y + window.scrollY) setPosY(position.y + window.scrollY)
		if (isWithinViewPort) setPosX(position.left - (350 / 5)) // !
		if (doesPassRightViewPort) setFarRight(true)
		else setFarRight(false)
		if (doesPassLeftViewPort)	setFarLeft(true)
		else setFarLeft(false)
	}, [ posX, posY, position ])

	const modalProps = {
		onMouseLeave: hideInfoModal,
		isFarLeft,
		isFarRight,
		posX,
		posY
	}

	return createPortal(
		<Modal { ...modalProps }>
			<Modal.ImageBox>
				<Modal.Title>{ info.title }</Modal.Title>
				<Modal.Image src={ infoImage } alt={ info.title } />
			</Modal.ImageBox>

			<Modal.Body>
				<Modal.ControlBox>
					<Modal.Button primary onClick={ goToVideo }> <Modal.Play /> </Modal.Button>
					<Modal.Button isIMDB onClick={ goToIMDB }>imdb</Modal.Button>
					<Modal.Button isTMDB onClick={ goToTMDB }>tmdb</Modal.Button>
					<Modal.Button secondary last onClick={ goToSource }> <Modal.MoreInfo /> </Modal.Button>
				</Modal.ControlBox>

				<Modal.MetaInfo>
					<Modal.Info score>{ info.score }% Rated</Modal.Info>
					<Modal.Info year>{ info.year }</Modal.Info>
					<Modal.Info certification>{ info.certification }</Modal.Info>
					<Modal.Info duration>{ info.duration }</Modal.Info>
					{/* <Modal.Info hdBadge>HD</Modal.Info> */}
				</Modal.MetaInfo>

				<Modal.MetaTags>
					{ info.genres.map(genre => (
						<Modal.Tag key={ uuid() }>{ genre }</Modal.Tag>
					))}
				</Modal.MetaTags>
			</Modal.Body>
		</Modal>
		, document.querySelector('#portal'))
}

export default InfoModalContainer

/*
				<Card.Body>
					<Card.ControlBox>
						<Card.Button primary onClick={ goToVideo }> <Card.Play /> </Card.Button>
						<Card.Button secondary> <Card.Save /> </Card.Button>
						<Card.Button secondary last onClick={ goToSource }> <Card.MoreInfo /> </Card.Button>
					</Card.ControlBox>

					<Card.MetaInfo>
						<Card.Info score>{ info.score }%</Card.Info>
						<Card.Info year>{ info.year }</Card.Info>
						<Card.Info maturity>{ info.maturity }</Card.Info>
						<Card.Info duration>{ info.duration }</Card.Info>
						<Card.Info hdBadge>HD</Card.Info>
					</Card.MetaInfo>

					<Card.MetaTags>
						{ info.genres.map(genre => (
							<Card.Tag key={ uuid() }>{ genre }</Card.Tag>
						))}
					</Card.MetaTags>
				</Card.Body>
*/
