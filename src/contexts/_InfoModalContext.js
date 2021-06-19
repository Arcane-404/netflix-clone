import React, { useEffect, useState, createContext, useContext } from 'react'
import { useStorage } from '../hooks'
import { getBound, getCardData } from '../utilities'

const InfoModalContexts = createContext()
const InfoModalConsumer = () => useContext(InfoModalContexts)
const InfoModalContextProvider = ({ children }) => {

	const [ info, setInfo ] = useStorage('info', {})
	const [ target, setTarget ] = useState(null)
	const [ isOpen, setOpen ] = useState(false)
	const [ position, setPosition ] = useState(null)
	const [ isFarLeft, setFarLeft ] = useState(false)
	const [ isFarRight, setFarRight ] = useState(false)
	const [ posX, setPosX ] = useState(0)
	const [ posY, setPosY ] = useState(0)

	const updateInfoData = (infoData, id) => {
		const newInfo = { ...info, [ id ]: infoData  }
		// console.log(infoData.id, newInfo, newInfo[id])
		setInfo(newInfo)
	}

	const getInfoData = async (type, id) => {
		const path = `/${ type }/${ id }`

		try {
			const infoData = await getCardData(path)
			updateInfoData(infoData, id)
			setTarget(infoData)
			setOpen(true)
		} catch (error) {
			console.error(error)
		}
	}

	const openInfoModal = (e, type, id) => {
		const bound = getBound(e)
		setPosition(bound)

		if (info[ id ]) {
			setTarget(info[ id ])
			setOpen(true)
		} else {
			getInfoData(type, id)
		}
	}

	const closeInfoModal = () => isOpen && setOpen(false)

	useEffect(() => {
		if (!position) return
		const doesPassLeftViewPort = position.width - position.left > window.screenLeft
		const doesPassRightViewPort = position.right  + position.width > window.innerWidth
		const isWithinViewPort = !doesPassLeftViewPort && !doesPassRightViewPort

		if (posY !== position.y + window.scrollY) setPosY(position.y + window.scrollY)
		if (isWithinViewPort) setPosX(position.left - (350 / 5)) // !
		if (doesPassRightViewPort) setFarRight(true)
		else setFarRight(false)
		if (doesPassLeftViewPort)	setFarLeft(true)
		else setFarLeft(false)
	}, [ posX, posY, position ])

	/*  */

	const value = {
		// info,
		target,
		isOpen,
		isFarLeft, isFarRight,
		posX, posY,
		openInfoModal, closeInfoModal
	}

	return (
		<InfoModalContexts.Provider value={ value }>
			{ children }
		</InfoModalContexts.Provider>
	)
}

export { InfoModalContexts, InfoModalContextProvider, InfoModalConsumer }
