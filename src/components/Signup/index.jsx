import React from 'react'
import { Container, Inner, Image, PreTitle, Span, Title, SubTitle, Button } from './_Signup.styles'

export default function Signup ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children } </Container>
	)
}

Signup.Inner = function SignupInner ({ children, ...restProps }) {
	return (
		<Inner { ...restProps }> { children } </Inner>
	)
}

Signup.Image = function SignupImage ({ children, ...restProps }) {
	return (
		<Image { ...restProps } />
	)
}

Signup.PreTitle = function SignupPreTitle ({ children, ...restProps }) {
	return (
		<PreTitle { ...restProps }> { children } </PreTitle>
	)
}

Signup.Span = function SignupSpan ({ children, ...restProps }) {
	return (
		<Span { ...restProps }> { children } </Span>
	)
}

Signup.Title = function SignupTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

Signup.SubTitle = function SignupSubTitle ({ children, ...restProps }) {
	return (
		<SubTitle { ...restProps }> { children } </SubTitle>
	)
}

Signup.Button = function SignupButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}
