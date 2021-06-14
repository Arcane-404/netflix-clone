import React from 'react'
import { v4 as uuid } from 'uuid'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { useQuery } from 'react-query'
import { SwiperRow } from '../../components'
import { CardContainer } from '../../containers'
import { swiperProps } from './swiperProps'
SwiperCore.use([ Navigation ])

const RowResultsContainer = (
	{ title, request, mediaType = 'movie' , isLargeRow, isTopRated }
) => {
	const { data } = useQuery(title, request)

	const cardProps = {
		mediaType,
		isLargeRow,
		isTopRated
	}

	return (
		<SwiperRow>
			<SwiperRow.Title>{ title }</SwiperRow.Title>

			<Swiper { ...swiperProps }>
				{ data && data.map(item => (
					<SwiperSlide tag="div" key={ uuid() }>
						<CardContainer { ...cardProps } item={ item } />
					</SwiperSlide>
				))}
			</Swiper>
		</SwiperRow>
	)
}

export default RowResultsContainer
