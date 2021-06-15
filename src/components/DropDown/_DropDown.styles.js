import styled, { css } from 'styled-components'
import { fontFamily } from '../_globals'

export const Container = styled.div`
	border: 3px solid red;
	border-top: 3px solid #FFF;
	background: #000;
	padding: 1em;
	display: flex;
	position: absolute;
	top: 175%;

	/* tooltip top */
	&::before {
    content: '';
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    border: 0.75em solid transparent;
		border-top: none;
    border-bottom-color: #FFF;
	}

	${({ user }) => user && css`
		width: 165px;
		flex-flow: column;
		right: 0;

		&::before {
			top: -10%;
			left: 50%;
		}
	`}
`

export const ListOne = styled.div`
	display: flex;
	flex-flow: column;

	& > a + a { margin-top: 0.75em; }
`

export const ListTwo = styled.div`
	display: flex;
	flex-flow: column;

	& > a + a { margin-top: 0.75em; }
`

export const Line = styled.span`
	background: #FFF;
	width: 100%;
	height: 0.05em;
	margin: 0.5em 0;
`

export const Option = styled.a.attrs(({ href }) => href && ({
	target: '_blank',
	rel: 'noopener noreferrer'
}))`
	color: #FFF;
	font-family: ${ fontFamily.tertiary };
	font-size: 0.9rem;
	cursor: pointer;
`
