import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '../'
import { screen, colors, fontFamily } from '../_globals'

const sides = css`
	padding: 0 5%;

	@media ${ screen.tablet.sm } {
		padding: 0 2.812em;
	}

	@media ${ screen.tablet.lg } {
		padding: 0 3.5em;
	}
`

export const Container = styled.nav`
	${ sides }

	width: 100%;
	min-height: 45px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	z-index: 5;

	${({ page }) => (page === 'home') && css`
		padding-top: 1.625em !important;
	`}

	${({ page }) => (page === 'signup') && css`
		border-bottom: 1px solid #E6E6E6;
	`}

	${({ page, theme }) => (page === 'browse') && css`
		background: #141414;
		background-image: ${ theme.gradient.navbar.browse };
		position: fixed;
	`}
`

export const Inner = styled.div`
	/* border: 3px solid red; */
	width: 100%;
	max-width: 1920px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
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
`

export const Close = styled(Icon.Close)`
	color: ${ colors.light };
	font-size: 2rem;
	margin-right: 0.563em;
	cursor: pointer;
`

export const Logo = styled.img`
	width: 85px;

	${({ page }) => {
		if (page === 'home') return css`width: 85px; padding: 0em 0;`
		if (page === 'signup') return css`width: 75px; padding: 1em 0;`
		if (page === 'login') return css`width: 75px; padding: 1em 0;`
		if (page === 'browse') return css`width: 85px; padding: 0em 0;`
		return css`background: red;`
	}}

	@media ${ screen.tablet.sm } {
	${({ page }) => {
		if (page === 'home') return css`width: 110px;`
		if (page === 'signup') return css`width: 165px;`
		if (page === 'login') return css`width: 165px;`
	}}
	}

	@media ${ screen.tablet.lg } {
	${({ page }) => {
		if (page === 'home') return css`width: 135px;`
		if (page === 'signup') return css`padding: 1.5em 0;`
		if (page === 'login') return css`padding: 1.5em 0;`
	}}
	}

	@media ${ screen.tablet.lg } {
	${({ page }) => {
		if (page === 'home') return css`width: 165px;`
	}}
	}
`

export const FilterBox = styled.ul`
	border: 3px solid red;
	display: flex;
	margin-left: 1em;
`

export const Text = styled.li`
	border: 2px solid pink;
	color: #E5E5E5;
	font-size: 0.875rem;
	cursor: pointer;
	transition: 0.4s ease;
	transition-property: color;

	&.active {
		color: #FFF;
		font-weight: 700;
	}
	&:not(.active):hover { color: #B3B3B3; }
	& + li { margin-left: 1em; }

	${({ primary }) => primary && css`
		color: red;
		font-size: 1rem;
	`}
`

export const Button = styled(Link)`
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: ${({ theme }) => theme.colors.primary._400 };
	color: ${({ theme }) => theme.colors.light };
	font-size: 0.9rem;
	padding: 0.2625em 0.5em;
	/* align-self: top; */
	align-self: baseline;

	@media ${ screen.tablet.sm } {
		font-size: 1rem;
		padding: 0.438em 1.062em;
	}
`

export const Anchor = styled(Link)`
	color: #333;
	font-family: ${ fontFamily.primary };
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

export const Logout = styled.button`

`
