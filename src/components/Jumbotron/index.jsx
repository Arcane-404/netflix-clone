import React from 'react'
import { Container, Inner, Title, SubTitle, Image } from './_Jumbotron.styles'

export default function Jumbotron ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Jumbotron.Inner = function JumbotronInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Jumbotron.Title = function JumbotronTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle ({ children, ...restProps }) {
	return <SubTitle { ...restProps }> { children } </SubTitle>
}

Jumbotron.Image = function JumbotronImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

