import React from 'react'
import { Container, Result, Title } from './_Swiper.styles'

export default function SwiperRow ({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>
}

SwiperRow.Result = function SwiperRowResult ({ children, ...restProps }) {
	return <Result { ...restProps }>{ children }</Result>
}

SwiperRow.Title = function SwiperRowTitle ({ children, ...restProps }) {
	return <Title { ...restProps }>{ children }</Title>
}
