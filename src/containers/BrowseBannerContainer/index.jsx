import React from 'react'
import { Spotlight } from '../../components'
import { useMediaQuery } from '../../custom'
import temp from '../../json/temp'

const BrowseBannerContainer = () => {
	const isMobile = useMediaQuery('mobile')

	return (
		<Spotlight>
			<Spotlight.Inner>
				<Spotlight.Box>
					<Spotlight.Title>{ temp.title }</Spotlight.Title>

					<Spotlight.InfoBox>
						<Spotlight.Info>{ temp.release_year }</Spotlight.Info>
						<Spotlight.Info>{ temp.maturity }</Spotlight.Info>
						<Spotlight.Info>{ temp.duration }</Spotlight.Info>
					</Spotlight.InfoBox>

					{ !isMobile && <Spotlight.Description>{ temp.description }</Spotlight.Description> }

					<Spotlight.CtaBox>
						<Spotlight.Button primary>Play</Spotlight.Button>
						{/* <Spotlight.Button>Info</Spotlight.Button> */}
					</Spotlight.CtaBox>
				</Spotlight.Box>
			</Spotlight.Inner>

			<Spotlight.ImageBox>
				<Spotlight.Image src={ temp.img } alt={ temp.alt } />
			</Spotlight.ImageBox>
		</Spotlight>
	)
}

export default BrowseBannerContainer
