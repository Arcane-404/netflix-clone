import React from 'react'
import {
	Container,
	Inner,
	Title,
	Content,
	Button
} from './_Logout.styles'

export default function Logout ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Logout.Inner = function LogoutInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Logout.Title = function LogoutTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Logout.Content = function LogoutContent ({ children, ...restProps }) {
	return <Content { ...restProps }> { children } </Content>
}

Logout.Button = function LogoutButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}
