# Collaboration Standards

## Component/Container Structure

```md
/components
  /Card
    _Card.stories.js
    _Card.styles.js
    index.jsx
  index.js
App.jsx
```

## General Component/Hook Setup

```jsx
// rafce (shortcut)
import React, { useState, useEffect } from 'react'
import { uuid4 as uuid } from 'uuid'
import { Button } from './components'

const DESKTOP_SIZE = 1080
const arrList = [ 'a', 'b', 'c' ]

const Component = ({ num1, num2, num3 }) => {

  const [ count, setCount ] = useState('')

  // const handleClick = () => setCount(count + 1)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('check state update:', count)
  }, [ num1, num2, num3 ])

  return (
    <div>
      <h2>Hooks Example: <code>{ count }</code></h2>
      <button onClick={ handleClick }>+</button>
      <button onClick={ () => console.log('') }>++</button>

			{ arrayList.length && arrayList.map((item) => (
				<Button key={ uuid() }>{ item }</Button>
			))}

			{arrayList.length && (
				<>
					<Button>OPEN</Button>
					<Button>CLOSE</Button>
				</>
			)}
    </div>
  )
}

export default Component
```
