import React from 'react'
import { Container, Img } from './_Preload.styles'

export default function Preload ({ children, ...restProps }) {
	return <Container { ...restProps }> { children }</Container>
}

Preload.Img = function PreloadImg ({ children, ...restProps }) {
	return <Img { ...restProps } />
}
