import React from 'react'
import { Link } from 'react-router-dom'
import {
	Container,
	Inner,
	Box,
	FilterBox,
	Menu,
	Close,
	Logo,
	Text,
	Button,
	Anchor
} from './_NavBar.styles'

export default function NavBar ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

NavBar.Inner = function NavBarInner ({ children, ...restProps }) {
	return <Inner { ...restProps } > { children } </Inner>
}

NavBar.Box = function NavBarBox ({ children, ...restProps }) {
	return <Box { ...restProps } > { children } </Box>
}

NavBar.FilterBox = function NavBarFilterBox ({ children, ...restProps }) {
	return <FilterBox { ...restProps } > { children } </FilterBox>
}

NavBar.Menu = function NavBarMenu ({ ...restProps }) {
	return <Menu { ...restProps } />
}

NavBar.Close = function NavBarMenu ({ ...restProps }) {
	return <Close { ...restProps } />
}

NavBar.Logo = function NavBarLogo ({ to = '', ...restProps }) {
	if (to) return <Link to={ to }><Logo { ...restProps } /></Link>
	else return <Logo { ...restProps } />
}

NavBar.Text = function NavBarText ({ children, ...restProps }) {
	return <Text { ...restProps } > { children } </Text>
}

NavBar.Button = function NavBarButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}

NavBar.Anchor = function NavBarAnchor ({ children, ...restProps }) {
	return <Anchor { ...restProps }> { children } </Anchor>
}
