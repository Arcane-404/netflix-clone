import React from 'react'
import {
	Container,
	Inner,
	Title,
	Form,
	Input,
	Button
} from './_SignupForm.styles'

export default function SignupForm ({ children, ...restProps }) {
	return <Container { ...restProps }> { children }</Container>
}

SignupForm.Inner = function SignupFormInner ({ children, ...restProps }) {
	return (
		<Inner { ...restProps }> { children } </Inner>
	)
}

SignupForm.Title = function SignupFormTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

SignupForm.Form = function SignupFormForm ({ children, ...restProps }) {
	return (
		<Form { ...restProps }> { children } </Form>
	)
}

SignupForm.Input = function SignupFormInput ({ children, ...restProps }) {
	return (
		<Input { ...restProps } />
	)
}

SignupForm.Button = function SignupFormButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}
