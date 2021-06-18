import React from 'react'
import { useQuery } from 'react-query'
import { Spotlight } from '../../components'
import { useMediaQuery } from '../../hooks'
import temp from '../../json/temp'

const SpotlightBannerContainer = ({ request }) => {

	const { data } = useQuery('spotlight', request)
	const isMobile = useMediaQuery('mobile')
	const isDesktop = useMediaQuery('desktop')

	const goToVideo = () => window.open(data.videos.direct || data.videos.search, '_blank')
	const goToSource = () => window.open(data.links.homepage, '_blank')
	const overview = data && data.copy[!isDesktop ? 'tagline' : 'description']
	const bgBannerImg = data && data.images.backdrop[isDesktop ? 'lg' : 'sm']

	if (!data) return null

	return (
		<Spotlight>
			<Spotlight.Inner>
				<Spotlight.Box>
					<Spotlight.Title>{ data.title }</Spotlight.Title>

					{ !isDesktop && (
						<Spotlight.InfoBox>
							<Spotlight.Info>{ data.year }</Spotlight.Info>
							{ data.certification && (
								<Spotlight.Info>{ data.certification }</Spotlight.Info>
							)}
							<Spotlight.Info>{ data.duration }</Spotlight.Info>
						</Spotlight.InfoBox>
					)}

					{ !isMobile && <Spotlight.Description>{ overview }</Spotlight.Description> }

					<Spotlight.CtaBox>
						<Spotlight.Button primary onClick={ goToVideo }>
							{ isDesktop && <Spotlight.Play /> } <Spotlight.Text>Play</Spotlight.Text>
						</Spotlight.Button>

						<Spotlight.Button secondary onClick={ goToSource }>
							{ isDesktop && <Spotlight.InfoCircle /> } <Spotlight.Text>More Info</Spotlight.Text>
						</Spotlight.Button>
					</Spotlight.CtaBox>
				</Spotlight.Box>
			</Spotlight.Inner>

			{ isDesktop && data.certification && (
				<Spotlight.Certification>{ data.certification }</Spotlight.Certification>
			)}

			<Spotlight.ImageBox><Spotlight.Image src={ bgBannerImg } alt={ data.title } /></Spotlight.ImageBox>
		</Spotlight>
	)
}

export default SpotlightBannerContainer
