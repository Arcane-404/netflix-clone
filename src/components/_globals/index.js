export const fontFamily = {
	primary: ({ theme }) => theme.fontFamily.primary,
	secondary: ({ theme }) => theme.fontFamily.secondary
}

export const fontSize = {
    headline: {
      sm: '',
      md: '',
      lg: ''
    },
    subhead: {
      sm: '',
      lg: ''
    },
    copy: {
      sm: '',
      lg: ''
    },
    link     : '',
    cta      : '',
    body     : ''
}

export const screen = {
	tablet: {
		sm: ({ theme }) => theme.breakpoints.tablet.sm,
		lg: ({ theme }) => theme.breakpoints.tablet.lg
	},
	desktop: ({ theme }) => theme.breakpoints.desktop
}
