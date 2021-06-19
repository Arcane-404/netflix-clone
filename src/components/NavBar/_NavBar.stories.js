import { storiesOf } from '@storybook/react'
import { logo } from '../../json'
import NavBar from './'

storiesOf('Components/NavBar', module)
.add('Logo', () => <NavBar.Logo grow src={ logo.img } alt={ logo.alt } />)
.add('Sign In Button', () => <NavBar.Button> Sign In </NavBar.Button>)
.add('Sign In Anchor', () => <NavBar.Anchor> Sign In </NavBar.Anchor>)
