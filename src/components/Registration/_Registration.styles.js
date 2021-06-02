import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	place-content: center;
	height: 800px;
	/* border: 1px solid red; */
`

export const Inner = styled.div`
	margin: 0 auto;
	max-width: 400px;
	width: 90%;
	/* border: 1px solid black; */
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Image = styled.img`
	width: 100%;
	margin-bottom: 2rem;
`

export const PreTitle = styled.p`
	font-size: 0.85rem;
`

export const Span = styled.span`
	font-family: ${ ({ theme }) =>  theme.fontFamily.primary };
	font-weight: 900;
`

export const Title = styled.h1`
	font-size: 1.5rem;
`

export const SubTitle = styled.h2`
	font-size: 1rem;
	max-width: 28ch;
	font-weight: 400;
`

export const Button = styled.button`
	margin: 2rem;
	width: 100%;
	height: 50px;
	background: ${ ({ theme }) => theme.colors.primary._400 };
	color: #fff;

	&:hover {
		background: ${ ({ theme }) => theme.colors.primary._300 };
	}

	&:active {
		background: ${({ theme }) => theme.colors.primary._600 };
	}
`

