import React from 'react'
import { Container, Inner, Title, SubTitle, Image } from './_Hero.styles'

export default function Hero ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Hero.Inner = function HeroInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Hero.Title = function HeroTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Hero.SubTitle = function HeroSubTitle ({ children, ...restProps }) {
	return <SubTitle { ...restProps }> { children } </SubTitle>
}

Hero.Image = function HeroImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

