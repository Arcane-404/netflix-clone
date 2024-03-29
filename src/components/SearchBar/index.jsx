import React from 'react'
import {
	Container,
	Search,
	Input
} from './_SearchBar.styles'

export default function SearchBar ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

SearchBar.Icon = function SearchBarIcon ({ ...restProps }) {
	return <Search { ...restProps } />
}

SearchBar.Input = function SearchBarInput ({ ...restProps }) {
	return <Input { ...restProps } />
}
