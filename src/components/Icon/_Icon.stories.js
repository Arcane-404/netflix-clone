import { storiesOf } from '@storybook/react'
import * as Icon from './'

storiesOf('Icons', module)
.add('All', () => (
	<>{	Object.values(Icon).map((Item, id) => (<Item key={ id } />)) }</>
))
.add('FaCheck', () => <Icon.FaCheck />)
.add('FaSearch', () => <Icon.FaSearch />)
.add('FaInfoCircle', () => <Icon.FaInfoCircle />)
.add('FaPlay', () => <Icon.FaPlay />)
.add('FaPlus', () => <Icon.FaPlus />)
.add('FaTimes', () => <Icon.FaTimes />)
.add('VscChevronRight', () => <Icon.ChevronRight />)
.add('FaChevronDown', () => <Icon.FaChevronDown />)
.add('FaCaretDown', () => <Icon.FaCaretDown />)
