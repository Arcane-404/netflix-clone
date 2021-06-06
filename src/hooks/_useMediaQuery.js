import { useEffect, useState } from 'react'
import theme from '../themes/theme'

const useMediaQuery = (query) => {
	query = (
		(query === 'mobile' && theme.breakpoints.mobile) ||
		(query === 'tablet-sm' && theme.breakpoints.tablet.sm) ||
		(query === 'tablet-lg' && theme.breakpoints.tablet.lg) ||
		(query === 'desktop' && theme.breakpoints.desktop) ||
		query
	)

	const mediaMatch = window.matchMedia(query)
	const [ matches, setMatches ] = useState(mediaMatch.matches)

	useEffect(() => {
		const handler = e => setMatches(e.matches)
		mediaMatch.addListener(handler)
		return () => mediaMatch.removeListener(handler)
	})

	return matches
}

export default useMediaQuery
