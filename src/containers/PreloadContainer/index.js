import React from 'react'
import { Preload } from '../../components'
import { logo } from '../../json'

const PreloadContainer = () => {
	return (
		<Preload>
			<Preload.Gif src={ logo.gif } alt={ logo.alt } />
		</Preload>
	)
}

export default PreloadContainer
