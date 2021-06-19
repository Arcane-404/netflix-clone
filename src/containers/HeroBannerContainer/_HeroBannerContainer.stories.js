import { storiesOf } from '@storybook/react'
import { HomeNavBarContainer, SignupFormContainer, HeroBannerContainer } from '../'

storiesOf('Hero Banner', module)
.add('Default', () => <HeroBannerContainer />)
.add('NavBar', () => <HomeNavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
