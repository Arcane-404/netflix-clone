import React from 'react'
import { Spotlight } from '../../components'
import temp from '../../json/temp'

const BrowseBannerContainer = () => {
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

					<Spotlight.CtaBox>
						<Spotlight.Button>Play</Spotlight.Button>
						{/* <Spotlight.Button>Info</Spotlight.Button> */}
					</Spotlight.CtaBox>
				</Spotlight.Box>
			</Spotlight.Inner>

			<Spotlight.Image src={ temp.img } alt={ temp.alt } />
		</Spotlight>
	)
}

export default BrowseBannerContainer
