import { css } from 'styled-components'
import { screen } from './paths'

export const isBoxModel = ({ box }) => box && css`border: 1px solid red;`
export const isDark = ({ dark }) => dark && css`background: #000;`
export const isLight = ({ light }) => light && css`background: #FFF;`
export const fullScreen = ({ full, fullW, fullH }) => {
	if (full) return css`width: 100%; height: 100%;`
	if (fullW) return css`width: 100%;`
	if (fullH) return css`height: 100%;`
}

export const pageWrapper = css`
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
`

export const sideSpacing = css`
	padding: 0 5%;

	@media ${ screen.tablet.sm } {
		padding: 0 1.875em;
	}

	@media ${ screen.tablet.lg } {
		padding: 0 3.5em;
	}
`

export const stateChangePrimary = css`
	background: ${({ theme }) => theme.colors.primary._400 };
	&:hover { background: ${({ theme }) => theme.colors.primary._300 }; }
	&:active { background: ${({ theme }) => theme.colors.primary._600 }; }
`
