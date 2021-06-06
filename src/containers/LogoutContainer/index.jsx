import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Logout } from '../../components'
import { auth } from '../../json'

const TIME = 15000

const LogoutContainer = () => {

	const history = useHistory()

	const homePageRedirect = () => {
		history.push('/')
	}

	const countDown = () => {
		setTimeout( () => {
			history.push('/')
		}, TIME )
	}

	useEffect( () => {
		countDown()
	})

	return (
		<Logout>
			<Logout.Inner>
				<Logout.Title>{ auth.logout.title }</Logout.Title>
				<Logout.Content>{ auth.logout.content1 }</Logout.Content>
				<Logout.Content>{ auth.logout.content2 }</Logout.Content>
				<Logout.Button onClick={ homePageRedirect }>{ auth.logout.button }</Logout.Button>
			</Logout.Inner>
		</Logout>
	)
}

export default LogoutContainer
