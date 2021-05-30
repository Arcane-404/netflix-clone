import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Inner, Logo,	Button, Anchor } from './_NavBar.styles'

export default function NavBar ({ children, ...restProps }) {
	return (<Container { ...restProps }> { children } </Container>)
}

NavBar.Inner = function NavBarInner ({ children, ...restProps }) {
	return (<Inner { ...restProps } > { children } </Inner>)
}

NavBar.Logo = function NavBarLogo ({ to = '', ...restProps }) {
	console.log(to)
	if (to) return <Link to={to}><Logo { ...restProps } /></Link>
	else return (<Logo { ...restProps } />)
}

NavBar.Button = function NavBarButton ({ children, ...restProps }) {
	return (<Button { ...restProps }> { children } </Button>)
}

NavBar.Anchor = function NavBarAnchor ({ children, ...restProps }) {
	return (<Anchor { ...restProps }> { children } </Anchor>)
}
