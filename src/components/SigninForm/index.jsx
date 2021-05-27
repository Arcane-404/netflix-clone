import React from 'react'
import {
	Container,
	Inner,
	Title,
	Input,
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

SigninForm.Checkbox = function SigninFormCheckbox ({ children, ...restProps }) {
	return (
		<Checkbox { ...restProps } />
	)
}

SigninForm.CheckboxLabel = function SigninFormCheckboxLabel ({ children, ...restProps }) {
	return (
		<CheckboxLabel { ...restProps }> { children } </CheckboxLabel>
	)
}

SigninForm.ReCaptchaHeader = function SigninFormReCaptchaHeader ({ children, ...restProps }) {
	return (
		<ReCaptchaHeader { ...restProps }> { children } </ReCaptchaHeader>
	)
}

SigninForm.LearnMoreLink = function SigninFormLearnMoreLink ({ children, ...restProps }) {
	return (
		<LearnMoreLink { ...restProps }> { children } </LearnMoreLink>
	)
}

SigninForm.ReCaptchaBody = function SigninFormReCaptchaBody ({ children, ...restProps }) {
	return (
		<ReCaptchaBody { ...restProps }> { children } </ReCaptchaBody>
	)
}

SigninForm.ReCaptchaLink = function SigninFormReCaptchaLink ({ children, ...restProps }) {
	return (
		<ReCaptchaLink { ...restProps }> { children } </ReCaptchaLink>
	)
}
