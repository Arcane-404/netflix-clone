import { storiesOf } from '@storybook/react'
import { DarkStyle } from '../../themes'
import SearchBarContainer from './'

storiesOf('Search Bar', module)
.add('Default', () => (
	<>
		<DarkStyle />
		<SearchBarContainer />
	</>
))
