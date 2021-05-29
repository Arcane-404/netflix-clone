import React from 'react'
import { Container, Inner, Frame, Title, Input, Label, Error, Button } from './_SignupForm.styles'

export default function SignupForm ({ children, ...restProps }) {
	return <Container { ...restProps }> { children }</Container>
}

SignupForm.Inner = function SignupFormInner ({ children, ...restProps }) {
	return (<Inner { ...restProps }> { children } </Inner>)
}

SignupForm.Frame = function SignupFormFrame ({ children, ...restProps }) {
	return (<Frame { ...restProps }> { children } </Frame>)
}

SignupForm.Title = function SignupFormTitle ({ children, ...restProps }) {
	return (<Title { ...restProps }> { children } </Title>)
}

SignupForm.Input = function SignupFormInput ({ ...restProps }) {
	return (<Input { ...restProps } />)
}

SignupForm.Label = function SignupFormLabel ({ children, ...restProps }) {
	return (<Label { ...restProps }> { children } </Label>)
}

SignupForm.Error = function SignupFormError ({ children, ...restProps }) {
	return (<Error { ...restProps }> { children } </Error>)
}

SignupForm.Button = function SignupFormButton ({ children, ...restProps }) {
	return (<Button { ...restProps }> { children } </Button>)
}
