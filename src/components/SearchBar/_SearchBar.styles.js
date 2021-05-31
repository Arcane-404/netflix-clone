import styled from 'styled-components'
import { screen } from '../_globals'

export const Container = styled.form`
	border: 1px solid #CCC;
	background: #1B1B1B;
	width: 115px;

	&:focus-within {
		border: 1px solid #FFF;
	}

	@media ${ screen.tablet.sm } {
		width: 180px;
	}
`

export const Input = styled.input.attrs({
	type: 'search'
})`
	/* border: 2px solid gray; */
	border: unset;
	background: transparent;
	color: #FFF;
	width: 100%;
	height: 100%;
	padding: 0.25em 0.5em;
`
