# Collaboration Standards

## Component Structure
```md
/components
  /Card
    _Card.stories.js
    _Card.styles.js
    index.jsx
  index.js
App.jsx
```
```jsx
// 1. _Card.styles.js
import styled from 'styled-components'
export const Frame = styled.div``
export const Image = styled.img``
export const Title = styled.h2``

// 2. index.jsx
import { Frame, Image, Title } from './_Card.styles'
export default function Card ({ children, ...props }) {
  return (<Frame { ...props }>{ children }</Frame>)
}
Card.Image = function CardImage ({ ...props }) {
  return (<Image { ...props } />)
}
Card.Title = function CardTitle ({ children, ...props }) {
  return (<Title { ...props }>{ children }</Title>)
}

// 3. index.js
export { default as Card } from './Card'

// 4. App.jsx / other
import React from 'react'
import { Card } from './components'

const App = () => {
  return (
    <Card>
      <Card.Image src="" alt="image-name" />
      <Card.Title>The Magic Card</Card.Title>
    </Card>
  )
}
```


## Component Setup
```jsx
// rafce (shortcut)
import React, { useState, useEffect } from 'react'

const Component = ({ num1, num2, num3 }) => {
  const [ count, setCount ] = useState('')

  function handleClick (e) {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('check state update:',count)
  }, [ num1, num2, num3 ])

  return (
    <div>
      <h2>Hooks Example: <code>{ count }</code></h2>
      <button onClick={ handleClick }>+</button>
    </div>
  )
}

export default Component
```
