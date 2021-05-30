import { storiesOf } from '@storybook/react'
import GeneralNavBarContainer from './'

storiesOf('Containers/General Navbar', module)
.add('Home', () => (<GeneralNavBarContainer path="/" />))
.add('Signup', () => (<GeneralNavBarContainer path="/signup" />))
.add('Login', () => (<GeneralNavBarContainer path="/login" />))

