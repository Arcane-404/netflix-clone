export const screen = {
	mobile: ({ theme }) => theme.breakpoints.mobile,
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
