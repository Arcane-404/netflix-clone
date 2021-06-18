import React from 'react'
import { v4 as uuid } from 'uuid'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useQuery } from 'react-query'
import { SwiperRow } from '../../components'
import { CardContainer, InfoModalContainer } from '../../containers'
import { InfoModalConsumer } from '../../contexts/consumers'
import { swiperProps } from './swiperProps'
import 'swiper/swiper-bundle.css'
SwiperCore.use([ Navigation ])

const RowResultsContainer = (
	{ title, request, mediaType = 'movie', isLargeRow, isTopRated }
) => {

	const { isOpen, target } = InfoModalConsumer()
	const { data } = useQuery(title, request)

	// console.log(data)

	const cardProps = {
		mediaType,
		isLargeRow,
		isTopRated
	}

	return (
		<SwiperRow.Result>
			<SwiperRow.Title>{ title }</SwiperRow.Title>

			<Swiper { ...swiperProps }>
				{ data && data.map(item => (
					<SwiperSlide tag="div" key={ uuid() }>
						<CardContainer { ...cardProps } item={ item } />
					</SwiperSlide>
				))}
			</Swiper>

			{ isOpen && target && <InfoModalContainer /> }
		</SwiperRow.Result>
	)
}

export default RowResultsContainer
