import React from 'react'
import { Container, Frame, Inner, ContentFrame, Title, Subtitle, ImageFrame, Image, Video } from './_Jumbotron.styles'

export default function Jumbotron ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Jumbotron.Frame = function JumbotronFrame ({ children, ...restProps }) {
	return <Frame { ...restProps }> { children } </Frame>
}

Jumbotron.Inner = function JumbotronInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Jumbotron.ContentFrame = function JumbotronContentFrame ({ children, ...restProps }) {
	return <ContentFrame { ...restProps }> { children } </ContentFrame>
}

Jumbotron.Title = function JumbotronTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Jumbotron.Inner = function JumbotronInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Jumbotron.Subtitle = function JumbotronSubtitle ({ children, ...restProps }) {
	return <Subtitle { ...restProps }> { children } </Subtitle>
}

Jumbotron.ImageFrame = function JumbotronImageFrame ({ children, ...restProps }) {
	return <ImageFrame { ...restProps }> { children } </ImageFrame>
}

Jumbotron.Image = function JumbotronImage ({ children, ...restProps }) {
	return <Image { ...restProps } />
}

Jumbotron.Video = function JumbotronVideo ({ children, ...restProps }) {
	return <Video { ...restProps } />
}
