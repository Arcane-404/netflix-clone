import React from 'react'
import {
	Container,
	Inner,
	PreTitle,
	Span,
	Title,
	SubTitle,
	Frame,
	Label,
	Input,
	Error,
	Button
} from './_RegForm.styles'

export default function RegForm ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

RegForm.Inner = function RegFormInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

RegForm.PreTitle = function RegFormPreTitle ({ children, ...restProps }) {
	return <PreTitle { ...restProps }> { children } </PreTitle>
}

RegForm.Span = function RegFormSpan ({ children, ...restProps }) {
	return <Span { ...restProps }> { children } </Span>
}


RegForm.Title = function RegFormTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

RegForm.SubTitle = function RegFormSubTitle ({ children, ...restProps }) {
	return <SubTitle { ...restProps }> { children } </SubTitle>
}

RegForm.Frame = function RegFormFrame ({ children, ...restProps }) {
	return <Frame { ...restProps }> { children } </Frame>
}

RegForm.Label = function RegFormLabel ({ children, ...restProps }) {
	return <Label { ...restProps }> { children } </Label>
}

RegForm.Input = function RegFormInput ({ children, ...restProps }) {
	return <Input { ...restProps } />
}

RegForm.Error = function RegFormError ({ children, ...restProps }) {
	return <Error { ...restProps }> { children } </Error>
}

RegForm.Button = function RegFormButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}
