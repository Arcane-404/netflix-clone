import React from 'react'
import { Container, Heading, Inner, Frame, Header, Title, Toggle, Body, Content } from './_Accordion.styles'

export default function Accordion ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Accordion.Heading = function AccordionHeading ({ children, ...restProps }) {
	return <Heading { ...restProps }> { children } </Heading>
}

Accordion.Inner = function AccordionInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

Accordion.Frame = function AccordionFrame ({ children, ...restProps }) {
	return <Frame { ...restProps }> { children } </Frame>
}

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {
	return <Header { ...restProps }> { children } </Header>
}

Accordion.Title = function AccordionTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Accordion.Toggle = function AccordionToggle ({ children, ...restProps }) {
	return <Toggle { ...restProps }> { children } </Toggle>
}

Accordion.Body = function AccordionBody ({ children, ...restProps }) {
	return <Body { ...restProps }> { children } </Body>
}

Accordion.Content = function AccordionContent ({ children, ...restProps }) {
	return <Content { ...restProps }> { children } </Content>
}

