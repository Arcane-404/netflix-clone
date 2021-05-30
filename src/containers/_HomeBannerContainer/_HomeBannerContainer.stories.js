import { storiesOf } from '@storybook/react'
import { GeneralNavBarContainer, SignupFormContainer, HomeBannerContainer } from '../'

storiesOf('Home Banner', module)
.add('All', () => <HomeBannerContainer />)
.add('NavBar', () => <GeneralNavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
