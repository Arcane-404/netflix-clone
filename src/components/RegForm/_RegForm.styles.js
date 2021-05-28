import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: grid;
	place-content: center;
	height: 60vh;
`

export const Inner = styled.div`
	max-width: 400px;
	margin: 0 auto;
	/* border: 1px solid black; */
`

export const PreTitle = styled.p`
	font-size: 0.85rem;
`

export const Span = styled.span`
	font-weight: 700;
`

export const Title = styled.h1`
	font-size: 1.5rem;
`

export const SubTitle = styled.h2`
	font-size: 1.15rem;
	margin-bottom: 1rem;
`

export const Input = styled.input`
	width: 100%;
	height: 50px;
	margin-bottom: 1rem;
	padding: 1rem;
`

export const Button = styled.button`
	width: 100%;
	height: 50px;
	background: ${ ({ theme }) => theme.colors.primary._400 };
	color: #fff;
`

