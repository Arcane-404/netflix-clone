import React from 'react'
import { Container, Img } from './_Gif.styles'

export default function Gif ({ children, ...restProps }) {
	return <Container { ...restProps }> { children }</Container>
}

Gif.Img = function GifImg ({ children, ...restProps }) {
	return <Img { ...restProps } />
}
