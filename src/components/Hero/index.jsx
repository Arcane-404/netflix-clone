import React from 'react'
import { Container, Inner, Title, SubTitle, ImageBox, Image } from './_Hero.styles'

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

Hero.ImageBox = function HeroImageBox ({ children, ...restProps }) {
	return <ImageBox { ...restProps }> { children } </ImageBox>
}

Hero.Image = function HeroImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

