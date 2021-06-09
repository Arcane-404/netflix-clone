import styled from 'styled-components'

export const Container = styled.div`
	background: black;
	width: 100%;
	color: #fff;
	border-bottom: 7px solid #222;
`

export const Heading = styled.h1`
	text-align: center;
	margin: 0;
	padding: 2.25rem 0;
	font-size: 1.75rem;
	font-family: ${ ({ theme }) => theme.fontFamily.primary };

	@media (min-width: 1080px) {
		font-size: 3rem;
	}
`

export const Inner = styled.div`
	width: 95%;
	margin: 0 auto;
	max-width: 800px;
`

export const Frame = styled.div`
	width: 100%;
	border: 3px solid #303030;
	margin: 0.5rem 0;
	background: #303030;
	:last-of-type {
		margin-bottom: 50px;
	}
`

export const Header = styled.div`
	padding-left: 1rem;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`

export const Title = styled.h1`
	font-size: 1.25rem;

	@media (min-width: 1080px) {
		font-size: 1.5rem;
	}
`

export const Toggle = styled.button`
	background: none;
	color: #fff;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-right: 1rem;
`

export const Body = styled.div`
	padding: 1rem;
	border-top: 2px solid #222;
`

export const Content = styled.p`
	font-size: 1.15rem;
	line-height: 1.4;

	:last-of-type {
		margin: 1rem 0;
	}

	@media (min-width: 1080px) {
		font-size: 1.5rem;
	}
`

