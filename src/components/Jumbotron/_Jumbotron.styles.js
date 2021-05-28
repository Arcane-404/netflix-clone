import styled from 'styled-components'

export const Container = styled.div`
	border: 3px solid red;
	text-align: center;
	/* width: 100%; */
	max-width: 950px;
	margin: 0 auto;
	padding: 50px 5%;
`

export const Frame = styled.div`
	border: 10px solid green;
`
export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily.primary };
	font-size: ${({ theme }) => theme.fontSize.headline || '1.75rem' };
	line-height: 1.1;
`

export const Subtitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.subhead || '1.125rem' };
	margin: 1em auto;
`

export const Inner = styled.div`
	border: 10px solid green;
`

export const Image = styled.img``

