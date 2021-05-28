import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: grid;
	place-content: center;
	height: 60vh;
`

export const Inner = styled.div`
	max-width: 400px;
	text-align: center;
`

export const Image = styled.image`
	/* border: 1px solid black; */
`

export const PreTitle = styled.p`
	font-size: 0.85rem;
	margin: 1rem;
`

export const Span = styled.span`
	font-weight: 900;
`

export const Title = styled.h1`
	font-size: 1.5rem;
`

export const SubTitle = styled.h2`
	font-size: 1rem;
	font-weight: 400;
`

export const Button = styled.button`
	margin-top: 2rem;
	width: 100%;
	height: 50px;
	background: ${ ({ theme }) => theme.colors.primary._400 };
	color: #fff;
`

