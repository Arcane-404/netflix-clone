import React from 'react'
import { Container, Title, Image } from './_Card.styles'

export default function Card ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Card.Title = function CardTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Card.Image = function CardImage ({ ...restProps }) {
	return <Image { ...restProps } />
}
