import React from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid'
import { Modal } from '../../components'
import { imageLink } from '../../utilities'
import { InfoModalConsumer } from '../../contexts/consumers'

const InfoModalContainer = () => {

	const {
		target,
		isFarLeft,
		isFarRight,
		posX,
		posY,
		closeInfoModal
	} = InfoModalConsumer()

	if (!target) return null

	const infoImage = imageLink(target.images.backdrop)
	const goToVideo = () => window.open(target.videos.direct || target.videos.search, '_blank')
	const goToSource = () => window.open(target.links.homepage, '_blank')
	const goToIMDB = () => window.open(target.links.imdb, '_blank')
	const goToTMDB = () => window.open(target.links.tmdb, '_blank')

	const modalProps = {
		onMouseLeave: closeInfoModal,
		isFarLeft,
		isFarRight,
		posX,
		posY
	}

	return createPortal(
		<Modal { ...modalProps }>
			<Modal.ImageBox>
				<Modal.Title>{ target.title }</Modal.Title>
				<Modal.Image src={ infoImage } alt={ target.title } />
			</Modal.ImageBox>

			<Modal.Body>
				<Modal.ControlBox>
					<Modal.Button primary onClick={ goToVideo }> <Modal.Play /> </Modal.Button>
					<Modal.Button isIMDB onClick={ goToIMDB }>imdb</Modal.Button>
					<Modal.Button isTMDB onClick={ goToTMDB }>tmdb</Modal.Button>
					<Modal.Button secondary last onClick={ goToSource }> <Modal.MoreInfo /> </Modal.Button>
				</Modal.ControlBox>

				<Modal.MetaInfo>
					<Modal.Info score>{ target.score }% Rated</Modal.Info>
					<Modal.Info year>{ target.year }</Modal.Info>
					{ target.certification && (
						<Modal.Info certification>{ target.certification }</Modal.Info>
					)}
					<Modal.Info duration>{ target.duration }</Modal.Info>
					{/* <Modal.Info hdBadge>HD</Modal.Info> */}
				</Modal.MetaInfo>

				<Modal.MetaTags>
					{ target.genres.map(genre => (
						<Modal.Tag key={ uuid() }>{ genre }</Modal.Tag>
					))}
				</Modal.MetaTags>
			</Modal.Body>
		</Modal>
		, document.querySelector('#portal'))
}

export default InfoModalContainer
