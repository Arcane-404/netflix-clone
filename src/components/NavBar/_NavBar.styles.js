import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '../'
import { pageWrapper, sideSpacing, stateChangePrimary, screen, colors, fontFamily } from '../_globals'

export const Container = styled.nav`
	${ sideSpacing }

	width: 100%;
	min-height: 45px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	z-index: 5;

	${({ page }) => (page === 'home') && css`
		padding-top: 1.75em !important;
	`}

	${({ page }) => (page === 'signup') && css`
		border-bottom: 1px solid #E6E6E6;
	`}

	${({ page }) => (page === 'browse') && css`
		background: #141414;
		position: fixed;
		transition: 0.4s ease;
		transition-property: background;

		${({ sticky }) => sticky && css`background: rgba(0,0,0, 0.6);`}
	`}

	@media ${ screen.tablet.sm } {
		${({ page, theme }) => (page === 'browse')  && css`
			background: transparent;
			background-image: ${ theme.gradient.navbar[100] };
		`}

		${({ sticky }) => sticky && css`background: rgba(0,0,0, 0.6);`}
	}

	@media ${ screen.desktop } {
		${({ page, theme }) => (page === 'browse')  && css`
			background-image: ${ theme.gradient.navbar[200] };
		`}

		${({ sticky }) => sticky && css`background: #141414;`}
	}
`

export const Inner = styled.div`
	${ pageWrapper }

	/* border: 3px solid red; */
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Box = styled.div`
	display: flex;
	align-items: center;
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
		if (page === 'home') return css`width: 85px;`
		if (page === 'signup') return css`width: 75px; padding: 1em 0;`
		if (page === 'login') return css`width: 75px; padding: 1em 0;`
		if (page === 'browse') return css`width: 85px;`
		return css`background: red;`
	}}

	@media ${ screen.tablet.sm } {
	${({ page }) => {
		if (page === 'home') return css`width: 120px;`
		if (page === 'signup') return css`width: 165px;`
		if (page === 'login') return css`width: 165px;`
		if (page === 'browse') return css`width: 120px; padding: 1.25em 0;`
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
		if (page === 'browse') return css`width: 90px;`
	}}
	}
`

export const Button = styled(Link)`
	${ stateChangePrimary }

	border-radius: ${({ theme }) => theme.radius.round.sm };
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

	&:hover {	text-decoration: underline; }

	@media ${ screen.tablet.sm } {
		font-size: 1rem;
	}

	@media ${ screen.tablet.lg } {
		font-size: 1.1875rem;
	}
`
