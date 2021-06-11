import React, { useState, createContext, useContext } from 'react'
import { Container, Heading, Inner, Frame, Header, Title, Toggle, Body, Content } from './_Accordion.styles'
import { Plus, Close } from '../Icon/'
import { faq } from '../../json/'
import { v4 as uuidv4 } from 'uuid'

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

	const [ currentIndex, setCurrentIndex ] = useState()
	const faqData = faq

	return (
		<>{
			faqData.map( (info, index) => (
				<ToggleContext.Provider
					key={ uuidv4() }
					value={{ currentIndex, setCurrentIndex, info, index }}>
					<Frame { ...restProps }> { children } </Frame>
				</ToggleContext.Provider>
			))
		}</>
	)
}

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {

	const { index, currentIndex, setCurrentIndex } = useContext(ToggleContext)

	return (
		<Header { ...restProps }
			onClick={ () => {
				setCurrentIndex(index)
				if (currentIndex == index ) {
					setCurrentIndex(null)
				}
			} }
		>
			{ children }
			{ currentIndex == index && <Accordion.Toggle> <Close /> </Accordion.Toggle> }
			{ currentIndex !== index && <Accordion.Toggle> <Plus />  </Accordion.Toggle> }

		</Header>
	)
}

Accordion.Title = function AccordionTitle ({ children, ...restProps }) {

	const { info } = useContext(ToggleContext)

	return <Title { ...restProps }> { info.header } </Title>
}

Accordion.Toggle = function AccordionToggle ({ children, ...restProps }) {
	return <Toggle { ...restProps }> { children } </Toggle>
}

Accordion.Body = function AccordionBody ({ children, ...restProps }) {

	const { currentIndex, index } = useContext(ToggleContext)
	let isActive = currentIndex == index

	return isActive ?  <Body { ...restProps }> { children } </Body> : null
}

Accordion.Content = function AccordionContent ({ children, ...restProps }) {

	const { info } = useContext(ToggleContext)

	return <Content { ...restProps }> { info.top_content } { info.bottom_content } </Content>
}

