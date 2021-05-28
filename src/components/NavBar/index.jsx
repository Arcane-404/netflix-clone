import React from 'react'
import { Container, Inner, Logo,	Button } from './_NavBar.styles'

export default function NavBar ({ children, ...restProps }) {
	return (<Container { ...restProps }> { children } </Container>)
}

NavBar.Inner = function NavBarInner ({ children, ...restProps }) {
	return (<Inner { ...restProps } > { children } </Inner>)
}

NavBar.Logo = function NavBarLogo ({ ...restProps }) {
	return (<Logo { ...restProps } />)
}

NavBar.Button = function NavBarButton ({ children, ...restProps }) {
	return (<Button { ...restProps }> { children } </Button>)
}
