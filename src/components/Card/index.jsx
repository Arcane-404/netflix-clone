import React from 'react'
import {
	Container,
	ImageBox,
	Image,
	TextBox,
	Title
} from './_Card.styles'

export default function Card ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Card.ImageBox = function CardImageBox ({ children, ...restProps }) {
	return <ImageBox { ...restProps }> { children } </ImageBox>
}

Card.Image = function CardImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

Card.TextBox = function CardTextBox ({ children, ...restProps }) {
	return <TextBox { ...restProps }> { children } </TextBox>
}

Card.Title = function CardTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}
