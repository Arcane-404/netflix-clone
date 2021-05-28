import React from 'react'
import { Container, Inner, PreTitle, Title, SubTitle, Input, Button } from './_RegForm.styles'

export default function RegForm ({ children, ...restProps }) {
	return (
		<Container { ...restProps}> { children } </Container>
	)
}

RegForm.Inner = function RegFormInner ({ children, ...restProps }) {
	return (
		<Inner { ...restProps }> { children } </Inner>
	)
}

RegForm.PreTitle = function RegFormPreTitle ({ children, ...restProps }) {
	return (
		<PreTitle { ...restProps }> { children } </PreTitle>
	)
}

RegForm.Title = function RegFormTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

RegForm.SubTitle = function RegFormSubTitle ({ children, ...restProps }) {
	return (
		<SubTitle { ...restProps }> { children } </SubTitle>
	)
}

RegForm.Input = function RegFormInput ({ children, ...restProps }) {
	return (
		<Input { ...restProps } />
	)
}

RegForm.Button = function RegFormButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}
