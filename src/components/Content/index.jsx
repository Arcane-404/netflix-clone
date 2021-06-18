import React from 'react'
import styled, { css } from 'styled-components'
import { pageWrapper, sideSpacing } from '../_globals'
import { fullScreen, isDark, isBoxModel } from '../_globals'

const Container = styled.div`
	${ sideSpacing }
	/* ${ isDark } */
	width: 100%;
	height: 100vh;
	${({ test }) => test && css`border: 5px solid darkslategray;`}
`

const Wrapper = styled.div`
	${ pageWrapper }
	${ fullScreen }
	${({ test }) => test && css`border: 3px solid dimgray;`}
`

const Box = styled.div`
	${ fullScreen }
	${({ test }) => test && css`
		display: flex;
		flex-flow: wrap;
		align-items: center;
		/* justify-content: space-around; */
		justify-content: center;
	`}
`

const Test = styled.div`
	${ fullScreen }
	${ isBoxModel }
	/* & * { border: 2px solid silver; } */
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
