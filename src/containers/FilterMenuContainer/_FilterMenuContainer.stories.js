import { storiesOf } from '@storybook/react'
import { DarkStyle } from '../../themes'
import FilterMenuContainer from './'

storiesOf('Menu', module)
.add('Filter', () => (
	<>
		<DarkStyle />
		<FilterMenuContainer />
	</>
))
