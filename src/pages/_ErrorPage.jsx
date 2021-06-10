import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Content, Card } from '../components'
import { getId } from '../utilities'
import { getData } from '../utilities/request'
import { infoResults, imageLink } from '../utilities/response'

import card from '../json/temp'
const { movies } = card

const ErrorPage = () => {
	return (
		<Content test full>
			<Content.Box test full>
				<Content.Test box>
					{ movies.map(item => (
						<Cards
							key={ uuid() }
							id={ item.id }
							title={ item.title }
							backdrop_path={ item.backdrop_path }
							original_title={ item.original_title }
						/>
					))}
				</Content.Test>
			</Content.Box>
		</Content>
	)
}


const Cards = (props) => {
	const [ info, setInfo ] = useState(true)
	const [ isHover, setHover ] = useState(false)

	const backdropImg = imageLink(props.backdrop_path)
	const toggleCardHover = () => setHover(!isHover)
	const goToVideo = () => window.open(info.links.youtube, '_blank')
	const goToSource = () => window.open(info.links.homepage, '_blank')

	const loadInfoData = async (e) => {
		const path = `/movie/${ getId(e) }`

		try {
			const infoData = await getData(path)
			const results = await infoResults(infoData)
			setInfo(results)
			toggleCardHover()
		} catch (error) {
			console.error(error)
		}
	}

	const cardProps = {
		'data-id': props.id,
		hover: isHover,
		// onMouseEnter: loadInfoData,
		onMouseEnter: toggleCardHover,
		onMouseLeave: toggleCardHover
	}

	return (
		<Card { ...cardProps }>
			<Card.ImageBox>
				<Card.Title>{ props.title }</Card.Title>
				<Card.Image src={ backdropImg } alt={ props.original_title } />
			</Card.ImageBox>

			{ info && (
				<Card.Body>
					<Card.ControlBox>
						<Card.Button primary> <Card.Play /> </Card.Button>
						<Card.Button secondary> <Card.Save /> </Card.Button>
						<Card.Button secondary last> <Card.MoreInfo /> </Card.Button>
					</Card.ControlBox>

					<Card.MetaInfo>
						<Card.Info score>90% Score</Card.Info>
						<Card.Info year>2021</Card.Info>
						<Card.Info maturity>PG</Card.Info>
						<Card.Info duration>1h 2m</Card.Info>
						<Card.Info hdBadge>HD</Card.Info>
					</Card.MetaInfo>

					<Card.MetaTags>
						<Card.Tag>Quirky</Card.Tag>
						<Card.Tag>Heartfelt</Card.Tag>
						<Card.Tag>Fantasy</Card.Tag>
					</Card.MetaTags>
				</Card.Body>
			)}
		</Card>
	)
}

export default ErrorPage
