import { storiesOf } from '@storybook/react'
import SearchBar from './'

storiesOf('Components/SearchBar', module)
.add('Input', () => ( <SearchBar.Input /> ))
.add('Icon', () => ( <SearchBar.Icon /> ))
