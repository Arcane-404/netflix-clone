import styled, { css } from 'styled-components'
import { screen } from '../_globals'
import { Icon } from '../'

export const Container = styled.form`
	border: 1px solid rgba(61, 66, 68, 0.85);
	background: rgba(0,0,0, 0.75);
	width: 115px;
	display: flex;
	position: relative;

	&:focus-within {
		border-color: rgba(255,255,255, 0.85);
	}

	@media ${ screen.tablet.sm } {
		width: 180px;
	}

	@media ${ screen.tablet.lg } {
		width: 270px;
	}

	@media ${ screen.desktop } {
		--size: 35px;
		border-color: transparent;
		background: transparent;
		width: var(--size);
		height: var(--size);
		overflow: hidden;
		transition: 0.3s ease;
		transition-property: width;

		/* &:focus-within {
			border-color: rgba(255,255,255, 0.85);
			background: rgba(0,0,0, 0.75);
			width: 270px;
		} */

		${({ inFocus }) => inFocus && css`
			border-color: rgba(61, 66, 68, 0.85);
			background: rgba(0,0,0, 0.75);
			width: 270px;
		`}
	}
`

export const Search = styled(Icon.Search)`
	color: #FFF;
	font-size: 1.3rem;
	align-self: center;
	margin: 0 0.375em;
	cursor: pointer;

	@media ${ screen.desktop } {
		position: absolute;
	}
`

export const Input = styled.input.attrs({
	type: 'search'
})`
	border: unset;
	background: transparent;
	color: #FFF;
	font-size: 14px;
	width: 100%;
	height: 100%;
	padding: 0.25em 0.5em;

	@media ${ screen.tablet.lg } {
		padding: 0.4375em 0.25em;
	}

	@media ${ screen.desktop } {
		padding-left: 2.313em;
	}
`
