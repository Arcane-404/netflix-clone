import { storiesOf } from '@storybook/react'
import { DarkStyle } from '../../themes'
import UserMenuContainer from './'

storiesOf('Menu', module)
.add('User', () => (
	<>
		<DarkStyle />
		<UserMenuContainer />
	</>
))
