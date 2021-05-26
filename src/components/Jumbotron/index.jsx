import React from 'react'
import {
	Container,
	Frame,
	Inner,
	Image
} from './_Jumbotron.styles'

export default function Jumbotron({ children, ...restProps }) {
	return <Container {...restProps}> { children } </Container>
}

Jumbotron.Frame = function JumbotronFrame({ children, ...restProps }) {
	return (
		<Frame {...restProps }> { children } </Frame>
	)
}

Jumbotron.Inner = function JumbotronInner({ children, ...restProps }) {
	return (
		<Inner {...restProps }> { children } </Inner>
	)
}

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
	return (
		<Image {...restProps } />
	)
}

