import React from 'react'
import { Container, Inner, Image, PreTitle, Title, SubTitle, Button } from './_Registration.styles'

export default function Registration ({ children, ...restProps }) {
	return (
		<Container { ...restProps }> { children }</Container>
	)
}

Registration.Inner = function RegistrationInner ({ children, ...restProps }) {
	return (
		<Inner { ...restProps }> { children } </Inner>
	)
}

Registration.Image = function RegistrationImage ({ children, ...restProps }) {
	return (
		<Image { ...restProps } />
	)
}

Registration.PreTitle = function RegistrationPreTitle ({ children, ...restProps }) {
	return (
		<PreTitle { ...restProps }> { children } </PreTitle>
	)
}

Registration.Title = function RegistrationTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }> { children } </Title>
	)
}

Registration.SubTitle = function RegistrationSubTitle ({ children, ...restProps }) {
	return (
		<SubTitle { ...restProps }> { children } </SubTitle>
	)
}

Registration.Button = function RegistrationButton ({ children, ...restProps }) {
	return (
		<Button { ...restProps }> { children } </Button>
	)
}
