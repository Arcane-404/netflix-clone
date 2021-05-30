import styled,{ css } from 'styled-components'
import { screen } from '../_globals'

export const Container = styled.form`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-flow: column;
	/* align-items: center; */
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
		/* font-size: ${({ theme }) => theme.fontSize.copy.lg }; */
		max-width: 100%;
	}
	@media ${ screen.tablet.lg } {
		margin-bottom: 1.25em;
	}
`

export const Input = styled.input`
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
		font-weight: 700;
		top: 20%;
		transform: translateY(0);
	}

	${({ error }) => error && css`
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange };
	`}

	@media ${ screen.tablet.lg } {
		height: 100%;
	}
`

export const Label = styled.label`
	color: ${({ theme }) => theme.colors._ || '#8C8C8C' };
	font-size: 0.875rem;
	position: absolute;
	top: 50%;
	left: 2%;
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
	padding: 0.625em 1em;
	background: ${({ theme }) => theme.colors.primary._400 };
	color: ${({ theme }) => theme.colors.light };
	border-radius: ${({ theme }) => theme.radius.xsm };
	margin: 0 auto;
	margin-top: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${({ theme }) => theme.shadow.btn };

	& svg {
		margin-left: 0.2em;
		transition: ${({ theme }) => theme.motion.default };
		transition-property: transform;
	}

	&:hover {
		background: ${({ theme }) => theme.colors.primary._300 };
		& svg { transform: translateX(5px); }
	}

	&:active {
		background: ${({ theme }) => theme.colors.primary._600 };
		& svg { transform: translateX(0); }
	}

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
