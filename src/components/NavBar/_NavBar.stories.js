import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions' // , actions
// import { text, boolean } from '@storybook/addon-knobs'
import NavBar from './'

const logo = { img: '/images/logo.svg' }

storiesOf('Navbar', module)
	.add('Default', () => (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo src={ logo.img } />
				<NavBar.Button> Sign In </NavBar.Button>
			</NavBar.Inner>
		</NavBar>
	))
	.add('Logo', () => (
		<NavBar.Logo src={ logo.img } />
	))
	.add('Sign In Button', () => (
		<NavBar.Button> Sign In </NavBar.Button>
	))
