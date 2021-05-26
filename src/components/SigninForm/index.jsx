import React from 'react'
import {
	Container,
	Inner,
	Title,
	Input,
	Button,
	Frame,
	Content,
	Link
} from './_SigninForm.styles'

export default function SigninForm ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children } </Container>
	)
}

SigninForm.Inner = function SigninFormInner ({ children, ...restProps }) {
	return (
		<Inner { ...restProps }> { children } </Inner>
	)
}

SigninForm.Title = function SigninFormTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

SigninForm.Input = function SigninFormInput ({ children, ...restProps }) {
	return (
		<Input { ...restProps } />
	)
}

SigninForm.Button = function SigninFormButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}

SigninForm.Frame = function SigninFormFrame ({ children, ...restProps }) {
	return (
		<Frame { ...restProps }> { children } </Frame>
	)
}

SigninForm.Content = function SigninFormContent ({ children, ...restProps }) {
	return (
		<Content { ...restProps }> { children } </Content>
	)
}

SigninForm.Link = function SigninFormLink ({ children, ...restProps }) {
	return (
		<Link { ...restProps }> { children } </Link>
	)
}
