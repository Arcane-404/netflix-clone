import React from 'react'
import {
	Container,
	Box,
	Avatar,
	Name,
	CaretDown
} from './_User.styles'

export default function User ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

User.Box = function UserBox ({ children, ...restProps }) {
	return <Box { ...restProps }> { children } </Box>
}

User.Avatar = function UserAvatar ({ ...restProps }) {
	return <Avatar { ...restProps } />
}

User.Name = function UserName ({ children, ...restProps }) {
	return <Name { ...restProps }> { children } </Name>
}

User.CaretDown = function UserCaretDown ({ ...restProps }) {
	return <CaretDown { ...restProps } />
}
