import React from 'react'
import { Container } from './_Background.styles'

export default function Background ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children } </Container>
	)
}
