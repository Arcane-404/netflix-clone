import React from 'react'
// import React, { useState } from 'react'
// import { v4 as uuid } from 'uuid'
// import { Content, Card } from '../components'
// import { getId } from '../utilities'
// import { getData } from '../utilities/request'
// import { infoResults, imageLink } from '../utilities/response'

const ErrorPage = () => <>NOPE</>

// const ErrorPage = () => {
// 	return (
// 		<Content test full>
// 			<Content.Box test full>
// 				<Content.Test box>
// 					{ movies.map(item => (
// 						<Cards
// 							key={ uuid() }
// 							id={ item.id }
// 							title={ item.title }
// 							backdrop_path={ item.backdrop_path }
// 							original_title={ item.original_title }
// 						/>
// 					))}
// 				</Content.Test>
// 			</Content.Box>
// 		</Content>
// 	)
// }


// const Cards = (props) => {
// 	const [ info, setInfo ] = useState(true)
// 	const [ isHover, setHover ] = useState(false)

// 	const backdropImg = imageLink(props.backdrop_path)
// 	const toggleCardHover = () => setHover(!isHover)
// 	const goToVideo = () => window.open(info.links.youtube, '_blank')
// 	const goToSource = () => window.open(info.links.homepage, '_blank')

// 	const loadInfoData = async (e) => {
// 		const path = `/movie/${ getId(e) }`

// 		try {
// 			const infoData = await getData(path)
// 			const results = await infoResults(infoData)
// 			setInfo(results)
// 			toggleCardHover()
// 		} catch (error) {
// 			console.error(error)
// 		}
// 	}

// 	const cardProps = {
// 		'data-id': props.id,
// 		hover: isHover,
// 		// onMouseEnter: loadInfoData,
// 		onMouseEnter: toggleCardHover,
// 		onMouseLeave: toggleCardHover
// 	}

// 	return (
// 		<>NOPE</>
// 	)
// }

export default ErrorPage
