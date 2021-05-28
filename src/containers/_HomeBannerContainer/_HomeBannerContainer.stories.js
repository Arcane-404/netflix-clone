import { storiesOf } from '@storybook/react'
import { NavBarContainer, SignupFormContainer, HomeBannerContainer } from '../'

storiesOf('Home Banner', module)
.add('All', () => <HomeBannerContainer />)
.add('NavBar', () => <NavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
