import React from 'react'
import { Container, Input, Icons } from './_SearchBar.styles'

export default function SearchBar ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

SearchBar.Input = function SearchBarInput ({ ...restProps }) {
	return <Input { ...restProps } />
}

SearchBar.Icon = function SearchBarIcon ({ ...restProps }) {
	return <Icons { ...restProps } />
}
