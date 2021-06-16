import React from 'react'
import {
	Container,
	ListOne,
	ListTwo,
	Line,
	Option
} from './_DropDown.styles'

export default function DropDown ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

DropDown.ListOne = function DropDownListOne ({ children, ...restProps }) {
	return <ListOne { ...restProps }> { children } </ListOne>
}

DropDown.ListTwo = function DropDownListTwo ({ children, ...restProps }) {
	return <ListTwo { ...restProps }> { children } </ListTwo>
}

DropDown.Line = function DropDownLine ({ children, ...restProps }) {
	return <Line { ...restProps } />
}

DropDown.Option = function DropDownOption ({ children, ...restProps }) {
	return <Option { ...restProps }> { children } </Option>
}
