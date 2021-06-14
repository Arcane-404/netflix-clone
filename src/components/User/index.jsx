import React from 'react'
import {
	Container,
	Menu,
	CaretDown,
	Dropdown,
	Logout
} from './_User.styles'

export default function User ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

User.Menu = function UserMenu ({ children, ...restProps }) {
	return <Menu { ...restProps }> { children } </Menu>
}

User.CaretDown = function UserCaretDown ({ ...restProps }) {
	return <CaretDown { ...restProps } />
}

User.Dropdown = function UserDropdown ({ children, ...restProps }) {
	return <Dropdown { ...restProps }> { children } </Dropdown>
}

User.Logout = function UserLogout ({ children, ...restProps }) {
	return <Logout { ...restProps }> { children } </Logout>
}
