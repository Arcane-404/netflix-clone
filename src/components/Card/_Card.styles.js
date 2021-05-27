import styled from 'styled-components'

export const Container = styled.div`
	border: 1px solid #000;
`

export const Title = styled.h1`
	font-size: 3rem;
	color: ${ ({ theme }) => theme.colors.secondary };
`

export const Button = styled.button`
	width: 150px;
	height: 50px;
`

export const List = styled.ul`
	border: 5px solid hotpink;
`

export const Item = styled.li`
	border: 1px solid greenyellow;
`
