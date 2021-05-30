import React from 'react'
import { Container, Input } from './_SearchBar.styles'
import { Icon } from '../'

export default function SearchBar ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

SearchBar.Input = function SearchBarInput ({ ...restProps }) {
	return <Input { ...restProps } />
}

SearchBar.Icon = function SearchBarIcon ({ ...restProps }) {
	return <Icon.Search { ...restProps } />
}
