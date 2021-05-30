import styled, { css } from 'styled-components'
import { fontFamily, screen } from '../_globals'

export const Container = styled.div`
	height: 100%;
	padding: 0 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: ${({ theme }) => theme.gradient.banner };
	/* background-blend-mode: overlay; */
`

export const Inner = styled.div`
	/* border: 3px solid red; */
	width: 100%;
	max-width: 550px;
	margin: 0 auto;
	padding: 0.938em 0;

	${({ dark }) => dark && css`background: #000;`}

	@media ${	screen.tablet.sm } {
		padding: 1.875em 0;
	}

	@media ${	screen.tablet.lg } {
		padding: 4.688em 0;
		max-width: 770px;
	}
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.light };
	font-family: ${ fontFamily.primary };
	font-size: ${({ theme }) => theme.fontSize.headline.sm };
	line-height: 1.1;
	text-align: center;

	@media ${	screen.tablet.sm } {
		font-size: ${({ theme }) => theme.fontSize.headline.md };
		max-width: 16ch;
		margin: 0 auto;
	}

	@media ${	screen.desktop } {
		font-size: ${({ theme }) => theme.fontSize.headline.lg };
	}
`

export const SubTitle = styled.h2`
	color: ${({ theme }) => theme.colors.light };
	font-size: ${({ theme }) => theme.fontSize.subhead.sm };
	margin: 1em auto;
	text-align: center;

	@media ${	screen.tablet.sm } {
		font-size: ${({ theme }) => theme.fontSize.subhead.lg };
	}
`

export const Image = styled.img`
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	user-select: unset;
	z-index: -1;
`
