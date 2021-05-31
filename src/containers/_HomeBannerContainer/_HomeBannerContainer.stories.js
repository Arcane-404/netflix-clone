import { storiesOf } from '@storybook/react'
import { HomeNavBarContainer, SignupFormContainer, HomeBannerContainer } from '../'

storiesOf('Containers/Home Banner', module)
.add('All', () => <HomeBannerContainer />)
.add('NavBar', () => <HomeNavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
