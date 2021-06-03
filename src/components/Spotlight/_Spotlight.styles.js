import styled, { css } from 'styled-components'
import { Icon } from '../'
import { screen } from '../_globals'

export const Container = styled.div`
	/* background: #000; */
	height: 125px;
	padding: 0 5%;
	position: relative;

	@media ${ screen.tablet.sm } {
		height: 340px;
		padding: 0 2.812em;
	}

	@media ${ screen.desktop } {
		height: 865px;
		padding: 0 3.5em;
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
	color: #FFF;
	font-family: ${({ theme }) => theme.fontFamily.tertiary };
	font-size: 1.1875rem;
	font-weight: 400;
	margin: 0;
	/* margin-bottom: 0.25em; */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

	@media ${ screen.desktop } {
		font-size: 1.688rem;
	}
`

export const Description = styled.p`
	color: #999;
	font-family: ${({ theme }) => theme.fontFamily.tertiary };
	font-size: 0.8125rem;
	line-height: 1.4;
	max-width: 35ch;
	margin-bottom: 1.5em;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

	@media ${ screen.desktop } {
		color: #FFF;
		font-family: ${({ theme }) => theme.fontFamily.secondary };
		/* font-size: 1.375rem; */
		font-size: 1.188rem;
		max-width: 40.25ch;
		margin: 0;
		margin: 1em 0;
	}
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
	border-radius: ${({ theme }) => theme.radius.round.xsm };
	background: #333;
	color: #FFF;
	font-size: 0.8125rem;
	font-weight: 700;
	padding: 0.57em 1.35em;

	& + button { margin-left: 0.75em; }

	${({ primary }) => primary && css`
		background: ${({ theme }) => theme.colors.primary._400 };

		&:hover { background: ${({ theme }) => theme.colors.primary._300 }; }
		&:active { background: ${({ theme }) => theme.colors.primary._600 }; }
	`}

	${({ secondary }) => secondary && css``}

	@media ${ screen.desktop } {
		border-radius: ${({ theme }) => theme.radius.round.sm };
		font-family: ${({ theme }) => theme.fontFamily.secondary };
		font-size: 1.1875rem;
		padding: 0.5em 1.5em 0.5em 1.25em;
		display: flex;
		align-items: center;

		& > svg  { margin-right: 0.35em; }

		${({ primary }) => primary && css`
			background: #FFF;
			color: #000;

			&:hover { background: rgba(255, 255, 255, 0.7); }
			&:active {
				background: rgba(255, 255, 255, 0.5);
				color: rgba(0, 0, 0, 0.7);
			}
		`}

		${({ secondary }) => secondary && css`
			background: rgba(109, 109, 110, 0.7);
			color: #FFF;

			&:hover { background: rgba(109, 109, 110, 0.4); }
			&:active {
				background: rgba(109, 109, 110, 0.4);
				color: rgba(255, 255, 255, 0.7);
			}
		`}
	}
`

export const Text = styled.span``

export const Play = styled(Icon.Play)`
	font-size: 1.6875rem;
	vertical-align: middle;
`

export const InfoCircle = styled(Icon.InfoCircle)`
	font-size: 1.6875rem;
	vertical-align: middle;
`

export const Maturity = styled.span`
	border-left: 3px solid #DCDCDC;
	background: rgba(51,51,51, 0.6);
	color: #FFF;
	font-size: 1rem;
	width: 120px;
	padding: 0.625em 0.8em;
	display: inline-block;
	position: absolute;
	top: 56.75%;
	right: 0;
`

export const ImageBox = styled.div`
	--size: 100%;

	background: #000;
	width: var(--size);
	height: var(--size);
	padding-left: 95px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;

	@media ${ screen.tablet.sm } {
		padding-left: 256px;
	}

	@media ${ screen.desktop } {
		padding-left: 0;

		&::before {
			content: '';
			background-image: ${({ theme }) => theme.gradient.banner.browse[200] };
			width: var(--size);
			height: var(--size);
			position: absolute;
		}

		/* background-image: ${({ theme }) => theme.gradient.banner.browse[100] }; */
	}
`

export const Image = styled.img`
	/* mask-image: ${({ theme }) => theme.gradient.banner.browse[100] }; */
	height: var(--size);
	object-fit: cover;
	object-position: top;
`
