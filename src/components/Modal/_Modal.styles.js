import styled, { css } from 'styled-components'
import { Icon } from '../'

export const Container = styled.div`
  border: 3px solid gold;
  border-radius: 0.25em;
	background: #181818;
  width: 325px;
  position: absolute;
	/* opacity: 0.25; */
	/* transform: translate(-5%, -20%); */
  /* transition: 0.2s ease; */
	/* transition-property: opacity, transform; */
	z-index: 2;

	${({ posY }) => posY && css`top: ${ posY + 'px' };` }
	${({ posX, isFarLeft, isFarRight }) => {
		if (isFarRight) return css`right: 4vw;`
		if (isFarLeft) return css`left: 4vw;`
		else return css`left: ${ posX + 'px' };`
	}}
`

export const ImageBox = styled.div`
  border: 1px solid silver;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
	display: block;
`

export const Title = styled.h3`
  color: #FFF;
  text-align: center;
  width: 100%;
  position: absolute;
`

export const Body = styled.div`
	border: 1px solid green;
	padding: 1em;
  /* display: none; */
  /* position: absolute; */
	top: 100%;

	& > div + div { margin-top: 1em; }
`

export const ControlBox = styled.div`
	display: flex;
`

export const Button = styled.button`
	--size: 34px;
	border-radius: 50%;
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

export const MetaInfo = styled.div`
	display: flex;
	flex-flow: wrap;
`

export const Info = styled.span`
	color: #FFF;

	& + span { margin-left: 0.5em; }

	${({ score, theme }) => score && css`
		color: green;
		font-weight: 700;
	`}

	/* ${({ year }) => year && css``} */

	${({ maturity }) => maturity && css`
		border: 1px solid rgba(255,255,255, 0.4);
		text-transform: uppercase;
		padding: 0 0.4em;
	`}

	/* ${({ duration }) => duration && css``} */

	${({ hdBadge }) => hdBadge && css`
		border: 1px solid rgba(255,255,255, 0.4);
		border-radius: 0.25em;
    color: rgba(255,255,255, 0.9);
		font-size: 0.7rem;
		padding: 0 0.5em;
		align-self: center;
	`}
`
export const Play = styled(Icon.Play)``
export const Save = styled(Icon.Plus)``
export const MoreInfo = styled(Icon.ChevronDown)``
// export const Close = styled()``

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
		border-radius: 50%;
		background: #646464;
		width: var(--size);
		height: var(--size);
		display: inline-block;
		transform: translateY(-50%);
	}
`
