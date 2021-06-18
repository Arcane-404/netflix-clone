import { useCallback, useEffect, useState } from 'react'
import localforage from 'localforage'

const useStorage = (key, init = null) => {
	const [ state, setState ] = useState(init)

	const getState = useCallback(async () => {
		const value = await localforage.getItem(key) || init
		return setState(value)
	}, [ key, init ])

	const saveState = async (value) => {
		await localforage.setItem(key, value)
		return setState(value)
	}

	const removeState = async () => {
		await localforage.removeItem(key)
		return setState(null)
	}

	useEffect(() => { getState() }, [ getState ])

	return [ state, saveState, removeState ]
}

export default useStorage
