import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from '../../components'
import { imageLink } from '../../utilities'

const InfoModalContainer = ({ info, setHover, position }) => {
	const [ isFarLeft, setFarLeft ] = useState(false)
	const [ isFarRight, setFarRight ] = useState(false)
	const [ posX, setPosX ] = useState(0)
	const [ posY, setPosY ] = useState(0)

	const hideInfoModal = () => {
		console.log('HOVER OUT')
		setHover(false)
	}

	useEffect(() => {
		const doesPassLeftViewPort = position.width - position.left > window.screenLeft
		const doesPassRightViewPort = position.right  + position.width > window.innerWidth
		// const isWithinViewPort = !doesPassLeftViewPort && !doesPassRightViewPort

		if (posY !== position.y + window.scrollY) setPosY(position.y + window.scrollY)
		if (isWithinViewPort) setPosX(position.x) // !
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
				<Modal.Image src={ imageLink(info.images.backdrop) } alt={ info.title } />
			</Modal.ImageBox>

			<Modal.Body>
				<Modal.ControlBox>
					<Modal.Button primary> + </Modal.Button>
					<Modal.Button secondary> + </Modal.Button>
					<Modal.Button secondary last> + </Modal.Button>
				</Modal.ControlBox>

				<Modal.MetaInfo>
					<Modal.Info score>90% Score</Modal.Info>
					<Modal.Info year>2021</Modal.Info>
					<Modal.Info maturity>PG</Modal.Info>
					<Modal.Info duration>1h 2m</Modal.Info>
					<Modal.Info hdBadge>HD</Modal.Info>
				</Modal.MetaInfo>

				<Modal.MetaTags>
					<Modal.Tag>Quirky</Modal.Tag>
					<Modal.Tag>Heartfelt</Modal.Tag>
					<Modal.Tag>Fantasy</Modal.Tag>
				</Modal.MetaTags>
			</Modal.Body>
		</Modal>
		, document.querySelector('#portal'))
}

export default InfoModalContainer
