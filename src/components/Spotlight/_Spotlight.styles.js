import styled, { css } from 'styled-components'
import { Icon } from '../'
import { pageWrapper, sideSpacing, screen } from '../_globals'

export const Container = styled.div`
	${ sideSpacing }

	height: 125px;
	margin-top: 45px;
	position: relative;

	@media ${ screen.tablet.sm } {
		margin-top: initial;
		height: 340px;
	}

	@media ${ screen.tablet.lg } {
		height: 410px;
	}

	@media ${ screen.desktop } {
		height: 865px;
	}
`

export const Inner = styled.div`
	${ pageWrapper }

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

	@media ${ screen.tablet.lg } {
		font-size: 1.25rem;
	}

	@media ${ screen.desktop } {
		font-family: ${({ theme }) => theme.fontFamily.primary };
		font-size: 1.563rem;
		text-shadow: ${({ theme }) => theme.shadow.text };
	}
`

export const Description = styled.p`
	color: #999;
	/* font-family: ${({ theme }) => theme.fontFamily.tertiary }; */
	font-size: 0.8125rem;
	line-height: 1.4;
	/* max-width: 33%; */
	margin-bottom: 1.5em;

	@media ${ screen.tablet.lg } {
		font-size: 1rem;
	}

	@media ${ screen.desktop } {
		color: #FFF;
		font-family: ${({ theme }) => theme.fontFamily.secondary };
		font-size: 1.25rem;
		max-width: 41ch;
		/* margin: 0; */
		margin: 1em 0;
		text-shadow: ${({ theme }) => theme.shadow.text };
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

	@media ${ screen.tablet.lg } {
		font-size: 1rem;
	}
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
	text-transform: uppercase;
	padding: 0.5em 1.35em;

	& + button { margin-left: 1.5em; }

	${({ primary }) => primary && css`
		background: ${({ theme }) => theme.colors.primary._400 };

		&:hover { background: ${({ theme }) => theme.colors.primary._300 }; }
		&:active { background: ${({ theme }) => theme.colors.primary._600 }; }
	`}

	${({ secondary }) => secondary && css`
		border: 1px solid  rgba(255, 255, 255, 0.5);
		background: rgba(42,42,42, 0.4);
		&:hover { background: rgba(42,42,42, 0.7); }
		&:active { border-color: rgba(255, 255, 255, 0.7); }
	`}

	@media ${ screen.tablet.lg } {
		font-size: 1rem;
		padding: 0.563em 1.375em;
	}

	@media ${ screen.desktop } {
		border: unset;
		border-radius: ${({ theme }) => theme.radius.round.sm };
		font-family: ${({ theme }) => theme.fontFamily.secondary };
		/* font-size: 1.1875rem; */
		font-size: 1.125rem;
		text-transform: capitalize;
		padding: 0.5em 1.5em 0.5em 1.25em;
		display: flex;
		align-items: center;

		& + button { margin-left: 0.75em; }
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

export const Certification = styled.span`
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
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;

	&::before {
		content: '';

		background-image: ${({ theme }) => theme.gradient.banner.browse[100] };
		width: 70%;
		height: var(--size);
		margin-left: auto;
		display: block;
		position: absolute;
		right: 0;
	}

	@media ${ screen.desktop } {
		&::before {
			background-image: ${({ theme }) => theme.gradient.banner.browse[200] };
			width: var(--size);
		}
	}
`

export const Image = styled.img`
	width: 70%;
	height: var(--size);
	margin-left: auto;
	object-fit: cover;
	object-position: top;

	@media ${ screen.desktop } {
		width: var(--size);
	}
`
