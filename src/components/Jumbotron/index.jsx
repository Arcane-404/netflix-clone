import React from 'react'
import {
	Container,
	Frame,
	Title,
	Subtitle,
	Inner,
	Image
} from './_Jumbotron.styles'

export default function Jumbotron ({ children, ...restProps }) {
	return <Container {...restProps}> { children } </Container>
}

Jumbotron.Frame = function JumbotronFrame ({ children, ...restProps }) {
	return (
		<Frame {...restProps }> { children } </Frame>
	)
}

Jumbotron.Title = function JumbotronTitle ({ children, ...restProps }) {
	return (
		<Title {...restProps }> { children } </Title>
	)
}

Jumbotron.Subtitle = function JumbotronSubtitle ({ children, ...restProps }) {
	return (
		<Subtitle {...restProps }> { children } </Subtitle>
	)
}

Jumbotron.Inner = function JumbotronInner ({ children, ...restProps }) {
	return (
		<Inner {...restProps }> { children } </Inner>
	)
}

Jumbotron.Image = function JumbotronImage ({ children, ...restProps }) {
	return (
		<Image {...restProps } />
	)
}

