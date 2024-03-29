import styled,{ css } from 'styled-components'
import { screen, stateChangePrimary } from '../_globals'

export const Container = styled.form`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-flow: column;
	/* align-items: center; */

	${({ dark }) => dark && css`color: #000 !important;`}
`

export const Inner = styled.div`
	width: 100%;
	@media ${ screen.tablet.lg } {
		display: flex;
	}
`

export const Frame = styled.div`
	position: relative;
	width: 100%;
`

export const Title = styled.h3`
	color: ${({ theme }) => theme.colors.light };
	font-size: ${({ theme }) => theme.fontSize.copy.sm };
	font-weight: 400;
	text-align: center;
	max-width: 30ch;
	margin-bottom: 0.5em;

	@media ${ screen.tablet.sm } {
		font-size: ${({ theme }) => theme.fontSize.copy.lg };
		max-width: 100%;
	}
	@media ${ screen.tablet.lg } {
		font-size: ${({ theme }) => theme.fontSize.copy.md };
		margin-bottom: 1.25em;
	}
`

export const Input = styled.input.attrs({
	type: 'text'
})`
	border: 1px solid ${({ theme }) => theme.colors.neutral._600 };
	border-radius: ${({ theme }) => theme.radius.xsm };
	width: 100%;
	height: 50px;
	/* padding: 0 1rem; */
	padding: 0.625em;
	padding-bottom: 0.2em;

	&:focus {
		border-color: ${({ theme }) => theme.colors.blue };
	}
	&:focus + label,
	&:not(:placeholder-shown) + label
	{
		font-size: 0.6875rem;
		top: 7%;
		transform: translateY(0);
	}

	${({ error }) => error && css`
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange };
	`}

	@media ${ screen.tablet.lg } {
		height: 100%;

		&:focus + label,
		&:not(:placeholder-shown) + label
		{
			font-weight: 700;
			top: 10%;
		}
	}
`

export const Label = styled.label`
	color: #8C8C8C;
	font-size: 0.875rem;
	/* margin-left: 1px; */
	margin-left: 0.938em;
	position: absolute;
	top: 50%;
	/* left: 3%; */
	left: 0;
	cursor: text;
	transform: translateY(-50%);
	transition: ${({ theme }) => theme.motion.default };
	transition-property: font, top, transform;
	/* display: none; */
`

export const Error = styled.span`
	color: ${({ theme }) => theme.colors.orange };
	font-size: 0.9375rem;
	position: absolute;
	top: 105%;
	left: 0;

	@media ${ screen.tablet.lg } {
		top: 110%;
		left: 1%;
	}
`

export const Button = styled.button.attrs({
	type: 'submit'
})`
	${ stateChangePrimary }

	border-radius: ${({ theme }) => theme.radius.round.xsm };
	color: ${({ theme }) => theme.colors.light };
	margin: 0 auto;
	margin-top: 1em;
	padding: 0.625em 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	/* box-shadow: ${({ theme }) => theme.shadow.btn }; */

	& > svg {
		margin-left: 0.2em;
		transition: ${({ theme }) => theme.motion.default };
		transition-property: transform;
	}

	&:hover { & svg { transform: translateX(5px); }}
	&:active { & svg { transform: translateX(0); }}

	@media ${ screen.tablet.lg } {
		font-size: 1.625rem;
		/* font-size: 1.5rem; */
		/* font-weight: 600; */
		width: 45%;
		/* width: 40%; */
		margin: 0;
		padding: 0.625em 0;
		border-left: 1px solid #333;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	@media ${ screen.desktop } {
		font-size: 1.875rem;
		width: 53%;
	}
`
