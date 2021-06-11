import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Content, Card, SwiperRow } from '../../components'
import { imageLink } from '../../utilities/response'
// import { ModalContainer } from './containers'
import { swiperProps } from './swiperProps'
import axios from 'axios'
const movies = { path: '/data/moviesShort.json' }

SwiperCore.use([ Navigation ])

const RowResultsContainer = ({ title, isLgRow }) => {
	const [ results, setResults ] = useState(null)

	const cardProps = {
		isLgRow
	}

	useEffect(() => {
		(() => (
			axios
			.get(movies.path)
			.then(response => setResults(response.data))
			.catch(error => console.error(error))
		))()
	}, [ ])

	return (
		// <Content test>
		<SwiperRow>
			<h1>{ title }</h1>

			<Swiper { ...swiperProps }>
				{ results && results.map((item, id) => (
					<SwiperSlide tag="div" key={ `slide-${ id }` }>
						<Card { ...cardProps } data-id={ item.id }>
							{ !isLgRow && <Card.Title>{ item.title }</Card.Title> }
							<Card.Image
								src={ imageLink(item.images[(isLgRow ? 'poster' : 'backdrop' )]) }
								alt={ item.title }
							/>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>

			{/* { isHover && info && <ModalContainer { ...modalProps } /> } */}
		</SwiperRow>
		// </Content>
	)
}

export default RowResultsContainer
