import { storiesOf } from '@storybook/react'
import { GeneralNavBarContainer, SignupFormContainer, HomeBannerContainer } from '../'

storiesOf('Containers/Home Banner', module)
.add('All', () => <HomeBannerContainer />)
.add('NavBar', () => <GeneralNavBarContainer />)
.add('Signup Form', () => <SignupFormContainer />)
