import styled from 'styled-components'
import { screen } from '../_globals'

export const Container = styled.form`
	border: 3px solid gray;
	width: 96px;

	&:focus-within {
		border: 3px solid lightblue;
	}

	@media ${ screen.tablet.sm } {
		width: 160px;
	}
`

export const Input = styled.input.attrs({
	type: 'search'
})`
	/* border: 2px solid gray; */
	width: 100%;
`
