import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Content, Card, SwiperRow } from '../../components'
import { CardContainer, InfoModalContainer } from '../'
// import { getId, imageLink } from '../../utilities'
import { swiperProps } from './swiperProps'

import axios from 'axios'
const movies = { path: '/data/moviesShort.json' }

SwiperCore.use([ Navigation ])

const RowResultsContainer = ({ title, isLargeRow = false }) => {
	const [ results, setResults ] = useState(null)
	// const [ info, setInfo ] = useState(null)
	// const [ isHover, setHover ] = useState(false)

	// const handleInfoModal = (e) => {
	// 	const id = getId(e)
	// 	const movie = results.find(item => item.id === +id)
	// 	console.log(id, movie)
	// }

	// const cardProps = {
	// 	isLargeRow,
	// 	onMouseEnter: handleInfoModal
	// }

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
				{ results && results.map(item => (
					<SwiperSlide tag="div" key={ uuid() }>
						{/* <CardContainer { ...cardProps } item={ item } /> */}
						<CardContainer isLargeRow={ isLargeRow } item={ item } />
					</SwiperSlide>
				))}
			</Swiper>

			{/* { isHover && info && <InfoModalContainer { ...modalProps } /> } */}
		</SwiperRow>
		// </Content>
	)
}

export default RowResultsContainer
