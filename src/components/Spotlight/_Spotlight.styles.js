import styled, { css } from 'styled-components'
import { screen } from '../_globals'

/*
side padding:
- 20px
- 60px
*/

export const Container = styled.div`
	/* background: #000; */
	height: 125px;
	padding: 0 5%;
	position: relative;

	@media ${ screen.tablet.sm } {
		height: 340px;
	}
`

export const Inner = styled.div`
	height: 100%;
	display: flex;
`

export const Box = styled.div`
	margin: auto 0;
`

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily.tertiary };
	font-size: 1.1875rem;
	font-weight: 400;
	color: #FFF;
	margin: 0;
	/* margin-bottom: 0.25em; */
`

export const Description = styled.p`
	color: #999;
	font-family: ${({ theme }) => theme.fontFamily.tertiary };
	font-size: 0.8125rem;
	line-height: 1.4;
	max-width: 35ch;
	margin-bottom: 1.5em;
`

export const InfoBox = styled.ul`
	font-family: ${({ theme }) => theme.fontFamily.tertiary };
	display: flex;
	margin-bottom: 0.8125em;
`

export const Info = styled.li`
	font-size: 0.8125rem;
	color: #999;

	& + li { margin-left: 0.8em; }
`

export const CtaBox = styled.div`
	display: flex;
`

export const Button = styled.button.attrs({
	type: 'button'
})`
	background: #333;
	color: #FFF;
	font-size: 0.8125rem;
	font-weight: 700;
	padding: 0.57em 1.35em;

	& + button { margin-left: 1.5em; }

	${({ primary }) => primary && css`
		background: ${({ theme }) => theme.colors.primary._400 };

		&:hover { background: ${({ theme }) => theme.colors.primary._300 }; }
		&:active { background: ${({ theme }) => theme.colors.primary._600 }; }
	`}

	${({ info }) => info && css``}
`

export const ImageBox = styled.div`
	background: #000;
	/* width: 100%; */
	height: 100%;
	padding-left: 95px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;

	@media ${ screen.tablet.sm } {
		padding-left: 256px;
	}
`

export const Image = styled.img`
	/* mask-image: ${({ theme }) => theme.gradient.banner.browse[100] }; */
	height: 100%;
	object-fit: cover;
	object-position: top;
`

