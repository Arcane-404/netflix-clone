import styled, { css } from 'styled-components'
import { fontFamily } from '../_globals'

export const Container = styled.div`
	border: 3px solid red;
	border-top: 3px solid #FFF;
	background: #000;
	padding: 0.625em;
	display: flex;
	position: absolute;

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
		/* display: none; */

		width: 165px;
		flex-flow: column;
		top: 175%;
		right: 0;

		&::before {
			top: -12%;
			left: 50%;
		}
	`}

	${({ filtered }) => filtered && css`
		top: 250%;
		left: 0;

		&::before {
			top: -23%;
			left: 10%;
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

	${({ horizontal }) => horizontal && css`
		width: 100%;
		height: 0.05em;
		margin: 0.5em 0;
	`}

	${({ vertical }) => vertical && css`
		width: 0.05em;
		height: auto;
		margin: 0 0.5em;
	`}
`

export const Option = styled.a.attrs(({ href }) => href && ({
	target: '_blank',
	rel: 'noopener noreferrer'
}))`
	color: #FFF;
	font-family: ${ fontFamily.tertiary };
	font-size: 0.9rem;
	width: max-content;
	cursor: pointer;

	${({ bold }) => bold && css`font-weight: 600;`}
	${({ disabled }) => disabled && css`cursor: not-allowed;`}
`
