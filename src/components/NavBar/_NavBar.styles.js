import styled from 'styled-components'

export const Container = styled.div`
	height: 80px;
	width: 100%;
	background: none;
	/* position: absolute; */
`

export const Inner = styled.div`
	max-width: 1200px;
	border: 1px solid black;
	margin: 0 auto;
	height: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`

export const Logo = styled.img`
	height: 100%;
	width: 100px;

	@media (min-width: 750px) {
		width: 200px;
	}
`

export const Button = styled.button`
	background: red;
	color: white;
	padding: 10px 25px;
`
