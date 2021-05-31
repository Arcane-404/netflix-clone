import React from 'react'
import {
	Container,
	Form,
	Title,
	InputFrame,
	Label,
	Input,
	Error,
	Button,
	Frame,
	Content,
	Link,
	Checkbox,
	CheckboxLabel,
	ReCaptchaHeader,
	LearnMoreLink,
	ReCaptchaBody,
	ReCaptchaLink
} from './_SigninForm.styles'

export default function Signin ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children } </Container>
	)
}

Signin.Form = function SigninForm ({ children, ...restProps }) {
	return (
		<Form { ...restProps }> { children } </Form>
	)
}

Signin.Title = function SigninTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

Signin.InputFrame = function SigninInputFrame ({ children, ...restProps }) {
	return (
		<InputFrame { ...restProps }> { children } </InputFrame>
	)
}

Signin.Label = function SigninLabel ({ children, ...restProps }) {
	return (
		<Label { ...restProps }> { children } </Label>
	)
}

Signin.Input = function SigninInput ({ children, ...restProps }) {
	return (
		<Input { ...restProps } />
	)
}

Signin.Error = function SigninError ({ children, ...restProps }) {
	return (
		<Error { ...restProps }> { children } </Error>
	)
}

Signin.Button = function SigninButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}

Signin.Frame = function SigninFrame ({ children, ...restProps }) {
	return (
		<Frame { ...restProps }> { children } </Frame>
	)
}

Signin.Content = function SigninContent ({ children, ...restProps }) {
	return (
		<Content { ...restProps }> { children } </Content>
	)
}

Signin.Link = function SigninLink ({ children, ...restProps }) {
	return (
		<Link { ...restProps }> { children } </Link>
	)
}

Signin.Checkbox = function SigninCheckbox ({ children, ...restProps }) {
	return (
		<Checkbox { ...restProps } />
	)
}

Signin.CheckboxLabel = function SigninCheckboxLabel ({ children, ...restProps }) {
	return (
		<CheckboxLabel { ...restProps }> { children } </CheckboxLabel>
	)
}

Signin.ReCaptchaHeader = function SigninReCaptchaHeader ({ children, ...restProps }) {
	return (
		<ReCaptchaHeader { ...restProps }> { children } </ReCaptchaHeader>
	)
}

Signin.LearnMoreLink = function SigninLearnMoreLink ({ children, ...restProps }) {
	return (
		<LearnMoreLink { ...restProps }> { children } </LearnMoreLink>
	)
}

Signin.ReCaptchaBody = function SigninReCaptchaBody ({ children, ...restProps }) {
	return (
		<ReCaptchaBody { ...restProps }> { children } </ReCaptchaBody>
	)
}

Signin.ReCaptchaLink = function SigninReCaptchaLink ({ children, ...restProps }) {
	return (
		<ReCaptchaLink { ...restProps }> { children } </ReCaptchaLink>
	)
}
