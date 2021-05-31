import styled from 'styled-components'
import { screen } from '../_globals'
import { Icon } from '../'

export const Container = styled.form`
	border: 1px solid #CCC;
	/* border: 1px solid transparent; */

	background: rgba(0,0,0,.75);
	width: 115px;
	display: flex;

	&:focus-within {
		border: 1px solid rgba(255,255,255,.85);
	}

	@media ${ screen.tablet.sm } {
		width: 180px;
	}
	@media ${ screen.tablet.lg } {
		width: 260px;

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

	/* &::-webkit-search-cancel-button { */
		/* -webkit-appearance: none; */
	/* } */

	@media ${ screen.tablet.lg } {
		padding: 0.4375em 0.875em;
	}
`

export const Icons = styled(Icon.Search)`
	color: #FFF;
	font-size: 1.3rem;
	align-self: center;
	margin: 0 2px;
	cursor: pointer;
`
