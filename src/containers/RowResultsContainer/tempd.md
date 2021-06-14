# Temp

```js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const movies = { path: '/data/moviesShort.json' }

	const [ data, setData ] = useState(null)


	useEffect(() => {
		(() => (
			axios
			.get(movies.path)
			.then(response => setData(response.data))
			.catch(error => console.error(error))
		))()
	}, [ ])
```
