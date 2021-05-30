import { storiesOf } from '@storybook/react'
import { home } from '../../json'
import Jumbotron from './'

storiesOf('Components/Jumbotron', module)
.add('Copy', () => (
	<Jumbotron.Inner dark>
		<Jumbotron.Title>{ home.banner.title }</Jumbotron.Title>
		<Jumbotron.SubTitle>{ home.banner.subtitle }</Jumbotron.SubTitle>
	</Jumbotron.Inner>
))
.add('Image', () => (
	<Jumbotron.Image src={ home.banner.img } alt={ home.banner.alt } />
))
