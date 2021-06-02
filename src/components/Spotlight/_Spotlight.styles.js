import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Inner = styled.div``
export const Box = styled.div``

export const Title = styled.h1`
	font-size: 1.5rem;
	color: #FFF;
`

export const InfoBox = styled.ul`
	display: flex;
	margin-bottom: 1em;
`

export const Info = styled.li`
	font-size: 0.8125rem;
	color: #999;

	& + li { margin-left: 0.8em; }
`

export const CtaBox = styled.div`
	display: flex;
`

export const Button = styled.button.attrs({
	type: 'button'
})`

	& + button { margin-left: 1.5em; }

	${({ info }) => info && css``}

	${({ play }) => play && css``}
`

export const Image = styled.img``
