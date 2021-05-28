import styled from 'styled-components'

export const Container = styled.div`
	border: 1px solid black;
	margin: 0 auto;
	width: 90%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Inner = styled.div``

export const Title = styled.h3`
	font-size: 1rem;
	max-width: 30ch;
	text-align: center;

	@media (min-width: 750px) {
		width: 100%;
	}
`

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 750px) {
		flex-direction: row;
		height: 50px;
		margin-bottom: 2rem;
	}

`

export const Input = styled.input`
	width: 100%;
	height: 50px;
	padding: 0 1rem;

	@media (min-width: 750px) {
		width: 600px;
	}
`

export const Button = styled.button`
	padding: 10px 20px;
	background: red;
	color: white;
	border-radius: 0.25rem;
	margin: 1rem auto;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 750px){
		margin: 0;
		width: 40%;
		font-size: 1.5rem;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`

