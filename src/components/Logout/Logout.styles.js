import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-top: 100px;

	@media (min-width: 550px) {
		background: url('/images/Logout.jpeg');
		background-position: top 10% left 10%;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		margin-top: 0;
		padding-top: 100px;
	}
`

export const Inner = styled.div`
	width: 90%;
	max-width: 540px;
	margin: 0 auto;
	padding: 2.7rem;
	border-radius: 0.375em;
	background: #fff;

`

export const Title = styled.h1``

export const Content = styled.p`
	line-height: 1.5;
	margin-bottom: 2rem;
`

export const Button = styled.button`
	width: 100%;
	height: 60px;
	background: #0071EB;
	color: #fff;
	border-radius: 0.125rem;
`
