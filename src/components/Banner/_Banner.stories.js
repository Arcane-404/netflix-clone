import { storiesOf } from '@storybook/react'
import { home } from '../../json'
import Banner from './'

storiesOf('Components/Banner', module)
.add('Copy', () => (
	<Banner.Inner dark>
		<Banner.Title>{ home.banner.title }</Banner.Title>
		<Banner.SubTitle>{ home.banner.subtitle }</Banner.SubTitle>
	</Banner.Inner>
))
.add('Image', () => (
	<Banner.Image src={ home.banner.img } alt={ home.banner.alt } />
))
