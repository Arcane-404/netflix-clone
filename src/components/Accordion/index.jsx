import React, { useState, createContext, useContext } from 'react'
import { Container, Heading, Inner, Frame, Header, Title, Toggle, Body, Content } from './_Accordion.styles'
import { Plus, Close } from '../Icon/'

const ToggleContext = createContext()

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

	const [ toggle, setToggle ] = useState(false)

	return (
		<ToggleContext.Provider value={{ toggle, setToggle }}>
			<Frame { ...restProps }> { children } </Frame>
		</ToggleContext.Provider>
	)
}

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {

	const { toggle, setToggle } = useContext(ToggleContext)

	return (
		<Header { ...restProps }
			onClick={ () => setToggle(!toggle) }
		>
			{ children }
			{ toggle ?
				<Accordion.Toggle> <Close />  </Accordion.Toggle> :
				<Accordion.Toggle> <Plus />  </Accordion.Toggle>
			}
		</Header>
	)
}

Accordion.Title = function AccordionTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Accordion.Toggle = function AccordionToggle ({ children, ...restProps }) {
	return <Toggle { ...restProps }> { children } </Toggle>
}

Accordion.Body = function AccordionBody ({ children, ...restProps }) {

	const { toggle } = useContext(ToggleContext)

	return toggle ?  <Body { ...restProps }> { children } </Body> : null
}

Accordion.Content = function AccordionContent ({ children, ...restProps }) {
	return <Content { ...restProps }> { children } </Content>
}

