import React from 'react'
import { Container } from './Background.styles'

export default function Background ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children } </Container>
	)
}
