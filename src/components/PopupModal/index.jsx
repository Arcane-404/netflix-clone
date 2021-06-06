import React from 'react'
import { Container } from './_PopupModal.styles'

export default function PopupModal ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}
