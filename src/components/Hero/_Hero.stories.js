import { storiesOf } from '@storybook/react'
import { DarkStyle } from '../../themes'
import { banner } from '../../json'
import Hero from './'

storiesOf('Hero Banner', module)
.add('Copy', () => (
	<Hero.Inner>
		<DarkStyle />
		<Hero.Title>{ banner.title }</Hero.Title>
		<Hero.SubTitle>{ banner.subtitle }</Hero.SubTitle>
	</Hero.Inner>
))
.add('Image', () => (
	<Hero.Image src={ banner.img } alt={ banner.alt } />
))
