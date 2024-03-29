import { useEffect, useRef } from 'react'

const useEventListener = (
	eventName, handler, element = window
) => {
	const savedHandler = useRef()
	useEffect(() => { savedHandler.current = handler }, [ handler ])

	useEffect(() => {
		if ( !(element && element.addEventListener) ) return
		const eventListener = event => savedHandler.current(event)

		element.addEventListener(eventName, eventListener)
		return () => element.removeEventListener(eventName, eventListener)
	}, [ element,eventName ])
}

export default useEventListener
