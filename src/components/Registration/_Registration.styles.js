import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	place-content: center;
	height: 80vh;
`

export const Inner = styled.div`
	margin: 0 auto;
	max-width: 400px;
	border: 1px solid black;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Image = styled.img`
	width: 100%;
`

export const PreTitle = styled.p``

export const Span = styled.span`
	font-weight: 700;
`

export const Title = styled.h1`
	font-size: 1.5rem;
`

export const SubTitle = styled.h2`
	font-size: 1rem;
	max-width: 28ch;
`

export const Button = styled.button`
	margin: 2rem;
	width: 100%;
	height: 50px;
`

