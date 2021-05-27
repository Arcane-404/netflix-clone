import React from 'react'
import { Container, Title, Button, List, Item } from './_Card.styles'

export default function Card ({ children, ...restProps }) {
	return (
		<Container { ...restProps }>{ children }</Container>
	)
}

Card.Title = function CardTitle ({ children, ...restProps }) {
	return (
		<Title { ...restProps }>{ children }</Title>
	)
}
