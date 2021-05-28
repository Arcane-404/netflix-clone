import { storiesOf } from '@storybook/react'
import * as Icon from './'

storiesOf('Icons', module)
.add('All', () => (
	<>{	Object.values(Icon).map((Item, id) => (<Item key={ id } />)) }</>
))
.add('FaSearch', () => <Icon.FaSearch />)
.add('FaInfoCircle', () => <Icon.FaInfoCircle />)
.add('FaPlay', () => <Icon.FaPlay />)
.add('FaPlus', () => <Icon.FaPlus />)
.add('FaTimes', () => <Icon.FaTimes />)
.add('FaChevronDown', () => <Icon.FaChevronDown />)
.add('FaChevronRight', () => <Icon.FaChevronRight />)
.add('FaCaretDown', () => <Icon.FaCaretDown />)
