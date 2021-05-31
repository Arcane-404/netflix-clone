# Block Architecture

1. create [`Card Component`](#components)
2. create [`Card Container`](#containers)
3. apply to [`Home Page`](#pages)

## **`/components`**

### Create folder & files

0. create `/Card` folder

1. create `_Card.stories.js` file
   - leave as empty
   - `_ + [ ComponentName ] + .stories.js`

2. create `_Card.styles.js` file
	- apply styling between '``'

```jsx
import styled from 'styled-components'

export const Container = styled.div``
export const Image = styled.img``
export const Title = styled.h2``
```

4. create `index.jsx` file
   - apply compound components

```jsx
import { Container, Image, Title } from './_Card.styles'

export default function Card ({ children, ...props }) {
  return <Container { ...props }>{ children }</Container>
}

Card.Image = function CardImage ({ ...props }) {
  return <Image { ...props } />
}

Card.Title = function CardTitle ({ children, ...props }) {
  return <Title { ...props }>{ children }</Title>
}
```

5. go & add to `index.js`

```js
export { default as Card } from './Card'
```

## **`/containers`**

### Create folder & files

0. create `/CardContainer` folder

1. create `_CardContainer.styles.js` file
   - leave as empty
   - `_ + [ ComponentName ] + .stories.js`

2. create `index.jsx` file
	- import components

```jsx
import React from 'react'
import { Card } from '../../components'

const CardContainer = () => {
  return (
    <Card>
      <Card.Image src="image.png" alt="image-name" />
      <Card.Title>The Magic Card</Card.Title>
    </Card>
  )
}

export default CardContainer
```

3. go & add to `index.js`

```js
export { default as CardContainer } from './CardContainer'
```

## **`/pages`**

- go to `_HomePage.jsx`
	- import container
```jsx
import React from 'react'
import { HeaderContainer, FooterContainer, CardContainer } from '../containers'

const HomePage = () => {
  return (
		<>
			<HeaderContainer />
			<CardContainer />
			<FooterContainer />
		</>
  )
}

export default HomePage
```
