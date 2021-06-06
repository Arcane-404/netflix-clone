import { storiesOf } from '@storybook/react'
import { HomeNavBarContainer, SignupFormContainer, HeroBannerContainer } from '../'

storiesOf('Containers/Hero Banner', module)
.add('All', () => <HeroBannerContainer />)
.add('NavBar', () => <HomeNavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
