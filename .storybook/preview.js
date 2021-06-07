import { addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
// import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import StoryRouter from 'storybook-react-router'
import { GlobalThemeProvider, EmailContextProvider } from '../src/contexts/providers'
import '../src/assets/style.scss'

addDecorator((Story) => (
	<GlobalThemeProvider>
		<EmailContextProvider>
			<Story />
		</EmailContextProvider>
	</GlobalThemeProvider>
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
