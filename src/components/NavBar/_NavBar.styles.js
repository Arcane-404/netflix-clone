import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '../'
import { screen, colors } from '../_globals'

export const Container = styled.nav`
	width: 100%;
	padding: 0 5%;
	position: absolute;
	top: 0;

	${({ browse, signup, theme }) => {
		if (signup) return css`
			border-bottom: 1px solid #E6E6E6;
		`

		if (browse) return css`
			background: #141414;
			background-image: ${ theme.gradient.navbar.browse };
			position: sticky;
		`
	}}

	@media ${ screen.tablet.sm } {
		padding: 0 2.812em;
	}

	@media ${ screen.tablet.lg } {
		padding: 0 3.5em;
	}
`

export const Inner = styled.div`
	max-width: 1920px;
	height: 100%;
	margin: 0 auto;
	padding-top: 1.625em;
	display: flex;
	justify-content: space-between;
`

export const Box = styled.div`
	display: flex;
`

export const Menu = styled(Icon.Menu)`
	color: ${ colors.light };
	font-size: 2rem;
	margin-right: 0.563em;
	cursor: pointer;

	/* @media ${ screen.tablet.lg } {
		display: none;
	} */
`

export const Close = styled(Icon.Close)`
	color: ${ colors.light };
	font-size: 2rem;
	margin-right: 0.563em;
	cursor: pointer;

	/* @media ${ screen.tablet.lg } {
		display: none;
	} */
`

export const Logo = styled.img`
	width: auto;
	height: 1.5rem;

	${({ grow }) => grow && css`
		@media ${ screen.tablet.sm } {
			width: 6.75rem;
			height: 2rem;
		}

		@media ${ screen.tablet.lg } {
			width: 8.375rem;
			height: 2.25rem;
		}

		@media ${ screen.desktop } {
			width: 10.4375rem;
			height: 2.8125rem;
		}
	`}
`

export const FilterBox = styled.ul`
	border: 3px solid red;
	display: flex;
	margin-left: 1em;
`

export const Text = styled.li`
	border: 2px solid pink;
	color: #FFF;
	font-size: 0.875rem;
	cursor: pointer;

	transition: 0.4s ease;
	transition-property: color;

	&:hover { color: #B3B3B3; }
	& + li { margin-left: 1em; }

	${({ primary }) => primary && css`color: red; `}
	${({ bold }) => bold && css`font-weight: 600; `}

`

export const Button = styled(Link)`
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: ${({ theme }) => theme.colors.primary._400 };
	color: ${({ theme }) => theme.colors.light };
	font-size: 0.9rem;
	padding: 0.4em;
	align-self: center;

	@media ${ screen.tablet.sm } {
		font-size: 1rem;
		padding: 0.438em 1.062em;
	}
`

export const Anchor = styled(Link)`
	color: #333;
	font-size: 0.875rem;
	font-weight: 700;

	&:hover {
		text-decoration: underline;
		/* text-decoration-color: #333; */
	}

	@media ${ screen.tablet.sm } {
		font-size: 1rem;
	}

	@media ${ screen.tablet.lg } {
		font-size: 1.1875rem;
	}
`
