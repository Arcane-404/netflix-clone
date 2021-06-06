import React from 'react'
import { Spotlight } from '../../components'
import { useMediaQuery } from '../../hooks'
import temp from '../../json/temp'

const SpotlightBannerContainer = () => {
	const isMobile = useMediaQuery('mobile')
	const isDesktop = useMediaQuery('desktop')
	const synopsis = isDesktop ? temp.synopsis1 : temp.synopsis2
	const bgBannerImg = isDesktop ? temp.img1 : temp.img2

	return (
		<Spotlight>
			<Spotlight.Inner>
				<Spotlight.Box>
					<Spotlight.Title>{ temp.title }</Spotlight.Title>

					{ !isDesktop && (
						<Spotlight.InfoBox>
							<Spotlight.Info>{ temp.release_year }</Spotlight.Info>
							<Spotlight.Info>{ temp.maturity }</Spotlight.Info>
							<Spotlight.Info>{ temp.duration }</Spotlight.Info>
						</Spotlight.InfoBox>
					)}

					{ !isMobile && <Spotlight.Description>{ synopsis }</Spotlight.Description> }

					<Spotlight.CtaBox>
						<Spotlight.Button primary>
							{ isDesktop && <Spotlight.Play /> } <Spotlight.Text>Play</Spotlight.Text>
						</Spotlight.Button>

						<Spotlight.Button secondary>
							{ isDesktop && <Spotlight.InfoCircle /> } <Spotlight.Text>More Info</Spotlight.Text>
						</Spotlight.Button>
					</Spotlight.CtaBox>
				</Spotlight.Box>
			</Spotlight.Inner>

			{ isDesktop && <Spotlight.Maturity>{ temp.maturity }</Spotlight.Maturity> }

			<Spotlight.ImageBox><Spotlight.Image src={ bgBannerImg } alt={ temp.alt } /></Spotlight.ImageBox>
		</Spotlight>
	)
}

export default SpotlightBannerContainer
