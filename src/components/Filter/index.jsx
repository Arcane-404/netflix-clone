import React from 'react'
import {
	Container,
	Option
} from './_Filter.styles'

export default function Filter ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Filter.Option = function FilterOption ({ children, ...restProps }) {
	return <Option { ...restProps }> { children } </Option>
}
