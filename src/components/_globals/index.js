import { css } from 'styled-components'

export const pageWrapper = css`
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
`

export const sideSpacing = css`
	padding: 0 5%;

	@media ${ ({ theme }) => theme.breakpoints.tablet.sm } {
		padding: 0 1.875em;
	}

	@media ${ ({ theme }) => theme.breakpoints.tablet.lg } {
		padding: 0 3.5em;
	}
`

export const stateChangePrimary = css`
	background: ${({ theme }) => theme.colors.primary._400 };
	&:hover { background: ${({ theme }) => theme.colors.primary._300 }; }
	&:active { background: ${({ theme }) => theme.colors.primary._600 }; }
`

export const screen = {
	tablet: {
		sm: ({ theme }) => theme.breakpoints.tablet.sm,
		lg: ({ theme }) => theme.breakpoints.tablet.lg
	},
	desktop: ({ theme }) => theme.breakpoints.desktop
}

export const fontFamily = {
	primary: ({ theme }) => theme.fontFamily.primary,
	secondary: ({ theme }) => theme.fontFamily.secondary
}

export const colors = {
	light: ({ theme }) => theme.colors.light,
	dark: ({ theme }) => theme.colors.dark
}
