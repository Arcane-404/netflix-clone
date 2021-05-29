import { storiesOf } from '@storybook/react'
import * as Icon from './'

storiesOf('Icons', module)
.add('All', () => (
	<>{	Object.values(Icon).map((Item, id) => (<Item key={ id } />)) }</>
))

.add('BiInfoCircle', 		() => <Icon.InfoCircle />)
.add('HiSearch', 				() => <Icon.Search />)

.add('IoCheckmark', 		() => <Icon.Check />)
.add('IoMenuOutline', 	() => <Icon.Menu />)
.add('IoPlaySharp', 		() => <Icon.Play />)
.add('IoAddOutline', 		() => <Icon.Plus />)
.add('IoRemoveOutline', () => <Icon.Minus />)
.add('IoCloseOutline',	() => <Icon.Close />)

.add('VscTriangleUp', 	() => <Icon.CaretUp />)
.add('VscTriangleDown',	() => <Icon.CaretDown />)
.add('VscChevronRight', () => <Icon.ChevronRight />)
.add('VscChevronDown', 	() => <Icon.ChevronDown />)
.add('VscEyeClosed', 		() => <Icon.EyeClosed />)
.add('VscEye', 					() => <Icon.EyeOpen />)
