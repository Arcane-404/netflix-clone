import React from 'react'
import styled from 'styled-components'
import { pageWrapper, sideSpacing } from '../_globals'

const Container = styled.div`
	${ sideSpacing }
	border: 5px solid darkslategray;
`

const Wrapper = styled.div`
	${ pageWrapper }
	border: 3px solid dimgray;
`

const Box = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-around;
`

const Test = styled.div`
	& * { border: 2px solid silver; }
	& * { transition: all 0.35s linear; }
`

export default function Content ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Content.Wrapper = function ContentWrapper ({ children, ...restProps }) {
	return <Wrapper { ...restProps }> { children } </Wrapper>
}

Content.Box = function ContentBox ({ children, ...restProps }) {
	return <Box { ...restProps }> { children } </Box>
}

Content.Test = function ContentTest ({ children, ...restProps }) {
	return <Test { ...restProps }> { children } </Test>
}
