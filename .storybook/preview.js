import { addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
// import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import StoryRouter from 'storybook-react-router'
import { ThemeProvider } from 'styled-components'
import { EmailContextProvider } from '../src/custom/EmailContext'
import GlobalStyle from '../src/themes/GlobalStyle'
import theme from '../src/themes/theme'
import '../src/assets/style.scss'

addDecorator((Story) => (
  <ThemeProvider theme={ theme }>
		<EmailContextProvider>
			<GlobalStyle />
			<Story />
		</EmailContextProvider>
  </ThemeProvider>
))
addDecorator((story, context) => withConsole()(story)(context))
addDecorator(withKnobs)
addDecorator(StoryRouter())
// addDecorator(withA11y)
addParameters({ viewport: { viewports:INITIAL_VIEWPORTS }})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

console.clear()
