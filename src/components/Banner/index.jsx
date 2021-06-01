import React from 'react'
import { Container, Inner, Title, SubTitle, Image } from './_Banner.styles'

export default function Banner ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Banner.Inner = function BannerInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Banner.Title = function BannerTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Banner.SubTitle = function BannerSubTitle ({ children, ...restProps }) {
	return <SubTitle { ...restProps }> { children } </SubTitle>
}

Banner.Image = function BannerImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

