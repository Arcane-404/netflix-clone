import { useEffect, useState } from 'react'
import theme from '../themes/theme'

const useMediaQuery = (query) => {
	query = (query === 'mobile' && theme.breakpoints.mobile) ||
					(query === 'tablet' && theme.breakpoints.tablet.sm) ||
					(query === 'desktop' && theme.breakpoints.tablet.lg) ||
					query

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
