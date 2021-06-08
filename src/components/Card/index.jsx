import React from 'react'
import {
	Container,
	ImageBox,
	Title,
	Image,
	ControlBox,
	Button,
	Play,
	Save,
	MoreInfo,
	Body,
	MetaInfo,
	Info,
	MetaTags,
	Tag
} from './_Card.styles'

export default function Card ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Card.ImageBox = function CardImageBox ({ children, ...restProps }) {
	return <ImageBox { ...restProps }> { children } </ImageBox>
}

Card.Title = function CardTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Card.Image = function CardImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

Card.ControlBox = function CardControlBox ({ children, ...restProps }) {
	return <ControlBox { ...restProps }> { children } </ControlBox>
}

Card.Button = function CardButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}

Card.Play = function CardPlay ({ ...restProps }) {
	return <Play { ...restProps } />
}

Card.Save = function CardSave ({ ...restProps }) {
	return <Save { ...restProps } />
}

Card.MoreInfo = function CardMoreInfo ({ ...restProps }) {
	return <MoreInfo { ...restProps } />
}

Card.Body = function CardBody ({ children, ...restProps }) {
	return <Body { ...restProps }> { children } </Body>
}

Card.MetaInfo = function CardMetaInfo ({ children, ...restProps }) {
	return <MetaInfo { ...restProps }> { children } </MetaInfo>
}

Card.Info = function CardInfo ({ children, ...restProps }) {
	return <Info { ...restProps }> { children } </Info>
}

Card.MetaTags = function CardMetaTags ({ children, ...restProps }) {
	return <MetaTags { ...restProps }> { children } </MetaTags>
}

Card.Tag = function CardTag ({ children, ...restProps }) {
	return <Tag { ...restProps }> { children } </Tag>
}
