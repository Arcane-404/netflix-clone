import React from 'react'
import { Container, Inner, Box, Title, Description, InfoBox, Info, CtaBox, Button, Text, Play, InfoCircle, ImageBox, Image } from './_Spotlight.styles'

export default function Spotlight ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Spotlight.Inner = function SpotlightInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Spotlight.Box = function SpotlightBox ({ children, ...restProps }) {
	return <Box { ...restProps }> { children } </Box>
}

Spotlight.Title = function SpotlightTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Spotlight.Description = function SpotlightDescription ({ children, ...restProps }) {
	return <Description { ...restProps }> { children } </Description>
}

Spotlight.InfoBox = function SpotlightInfoBox ({ children, ...restProps }) {
	return <InfoBox { ...restProps }> { children } </InfoBox>
}

Spotlight.Info = function SpotlightInfo ({ children, ...restProps }) {
	return <Info { ...restProps }> { children } </Info>
}

Spotlight.CtaBox = function SpotlightCtaBox ({ children, ...restProps }) {
	return <CtaBox { ...restProps }> { children } </CtaBox>
}

Spotlight.Button = function SpotlightButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}

Spotlight.Text = function SpotlightText ({ children, ...restProps }) {
	return <Text { ...restProps }> { children } </Text>
}

Spotlight.Play = function SpotlightPlay ({ ...restProps }) {
	return <Play { ...restProps } />
}

Spotlight.InfoCircle = function SpotlightInfoCircle ({ ...restProps }) {
	return <InfoCircle { ...restProps } />
}

Spotlight.ImageBox = function SpotlightImageBox ({ children, ...restProps }) {
	return <ImageBox { ...restProps }> { children } </ImageBox>
}

Spotlight.Image = function SpotlightImage ({ ...restProps }) {
	return <Image { ...restProps } />
}
