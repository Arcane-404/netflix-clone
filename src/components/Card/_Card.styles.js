import styled, { css } from 'styled-components'
import { Icon } from '../'

export const Container = styled.div`
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: #181818;
	/* width: 100%; */
	min-width: 235px;
	min-height: 130px;
	display: flex;
	flex-flow: column;
	overflow: hidden;

	& > div:nth-child(1) { flex: 1 1 195px; }
	& > div:nth-child(2) { flex: 1 1 155px; }

	${({ hover }) => hover && css`
		min-width: 345px;
		min-height: 350px;
	`}
`

export const ImageBox = styled.div`
	display: flex;
	position: relative;
`

export const Title = styled.h3`
	color: #FFF;
	width: 100%;
	text-align: center;
	margin-top: auto;
	text-shadow: ${({ theme }) => theme.shadow.text };
	z-index: 1;
`

export const Image = styled.img`
	position: absolute;
`

export const Body = styled.div`
	padding: 1em;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
`

export const ControlBox = styled.div`
	display: flex;
`

export const Button = styled.button`
	--size: 34px;
	border-radius: ${({ theme }) => theme.radius.circle };
	line-height: 0;
	width: var(--size);
	height: var(--size);

	& + button { margin-left: 0.75em; }

	${({ primary }) => primary && css`
		background: #FFF;
		color: #000;

		&:hover {
			background: #E6E6E6;
		}
		&:active {
			background: rgba(255, 255, 255, 0.5);
			color: rgba(0,0,0, 0.7);
		}
	`}

	${({ secondary }) => secondary && css`
		border: 2px solid rgba(255,255,255, 0.5);
		background: rgba(42, 42, 42, 0.6);
		color: #FFF;

		&:hover {
			border-color: #FFF;
			background: #2A2A2A;
		}
		&:active {
			background: rgba(255, 255, 255, 0.7);
		}
	`}

	${({ last }) => last && css`margin-left: auto !important;`}
`

export const Play = styled(Icon.Play)``
export const Save = styled(Icon.Plus)``
export const MoreInfo = styled(Icon.ChevronDown)``
// export const Close = styled()``

export const MetaInfo = styled.div`
	display: flex;
	flex-flow: wrap;
`

export const Info = styled.span`
	color: #FFF;
	/* display: inline-block; */

	& + span { margin-left: 0.5em; }

	${({ score, theme }) => score && css`
		color: ${ theme.colors._green };
		font-family: ${ theme.fontFamily.primary };
		font-weight: 700;
	`}

	${({ year }) => year && css``}

	${({ maturity }) => maturity && css`
		border: 1px solid rgba(255,255,255, 0.4);
		text-transform: uppercase;
		padding: 0 0.4em;
	`}

	${({ duration }) => duration && css``}

	${({ hdBadge }) => hdBadge && css`
		border: 1px solid rgba(255,255,255, 0.4);
		border-radius: 0.25em;
    color: rgba(255,255,255, 0.9);
		font-size: 0.7rem;
		padding: 0 0.5em;
		align-self: center;
	`}
`

export const MetaTags = styled.div`
	display: flex;
	flex-flow: wrap;
`

export const Tag = styled.span`
	color: #FFF;

	& + span { margin-left: 0.25em; }

	& + span::before {
		content: '';
		--size: 5px;
		border-radius: ${({ theme }) => theme.radius.circle };
		background: #646464;
		width: var(--size);
		height: var(--size);
		display: inline-block;
		transform: translateY(-50%);
	}
`
