import React from 'react'
import {
	Container,
	Text
} from './_Filter.styles'

export default function Filter ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Filter.Text = function FilterText ({ children, ...restProps }) {
	return <Text { ...restProps }> { children } </Text>
}
