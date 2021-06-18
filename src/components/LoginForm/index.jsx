import React from 'react'
import {
	Container,
	Form,
	Title,
	InputFrame,
	Label,
	Input,
	Error,
	FirebaseError,
	Button,
	Frame,
	Content,
	Links,
	Checkbox,
	CheckboxLabel,
	ReCaptchaHeader,
	LearnMoreLink,
	ReCaptchaBody,
	ReCaptchaLink
} from './_LoginForm.styles'

export default function Login ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Login.Form = function LoginForm ({ children, ...restProps }) {
	return <Form { ...restProps }> { children } </Form>
}

Login.Title = function LoginTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Login.InputFrame = function LoginInputFrame ({ children, ...restProps }) {
	return <InputFrame { ...restProps }> { children } </InputFrame>
}

Login.Label = function LoginLabel ({ children, ...restProps }) {
	return <Label { ...restProps }> { children } </Label>
}

Login.Input = function LoginInput ({ ...restProps }) {
	return <Input { ...restProps } />
}

Login.Error = function LoginError ({ children, ...restProps }) {
	return <Error { ...restProps }> { children } </Error>
}

Login.FirebaseError = function LoginFirebaseError ({ children, ...restProps }) {
	return <FirebaseError { ...restProps }> { children } </FirebaseError>
}

Login.Button = function LoginButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}

Login.Frame = function LoginFrame ({ children, ...restProps }) {
	return <Frame { ...restProps }> { children } </Frame>
}

Login.Content = function LoginContent ({ children, ...restProps }) {
	return <Content { ...restProps }> { children } </Content>
}

Login.Link = function LoginLink ({ children, ...restProps }) {
	return <Links { ...restProps }> { children } </Links>
}

Login.Checkbox = function LoginCheckbox ({ ...restProps }) {
	return <Checkbox { ...restProps } />
}

Login.CheckboxLabel = function LoginCheckboxLabel ({ children, ...restProps }) {
	return <CheckboxLabel { ...restProps }> { children } </CheckboxLabel>
}

Login.ReCaptchaHeader = function LoginReCaptchaHeader ({ children, ...restProps }) {
	return <ReCaptchaHeader { ...restProps }> { children } </ReCaptchaHeader>
}

Login.LearnMoreLink = function LoginLearnMoreLink ({ children, ...restProps }) {
	return <LearnMoreLink { ...restProps }> { children } </LearnMoreLink>
}

Login.ReCaptchaBody = function LoginReCaptchaBody ({ children, ...restProps }) {
	return <ReCaptchaBody { ...restProps }> { children } </ReCaptchaBody>
}

Login.ReCaptchaLink = function LoginReCaptchaLink ({ children, ...restProps }) {
	return <ReCaptchaLink { ...restProps }> { children } </ReCaptchaLink>
}
