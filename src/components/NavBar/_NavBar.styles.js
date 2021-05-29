import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { screen } from '../_globals'

export const Container = styled.nav`
	width: 100%;
	padding: 0 5%;
	position: absolute;

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

export const Logo = styled.img`
	width: auto;
	height: 1.5rem;

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
`

export const Button = styled(Link)`
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: ${({ theme }) => theme.colors.primary._400 };
	color: ${({ theme }) => theme.colors.light };
	font-size: 0.9rem;
	padding: 0.4em;
	align-self: center;

	@media ${ screen.tablet.sm } {
		font-size: inherit;
		padding: 0.438em 1.062em;
	}
`
