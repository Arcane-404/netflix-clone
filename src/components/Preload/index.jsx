import React from 'react'
import { Container, Gif } from './_Preload.styles'

export default function Preload ({ children, ...restProps }) {
	return <Container { ...restProps }> { children }</Container>
}

Preload.Gif = function PreloadGif ({ ...restProps }) {
	return <Gif { ...restProps } />
}
