import styled from 'styled-components'
import { Icon } from '../'

export const Container = styled.div`
	/* border: 3px solid red; */
	position: relative;
`


export const Box = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	& > * + * { margin-left: 0.75em; }
`

export const Avatar = styled.img`
	width: 32px;
`

export const Name = styled.span`
	color: #FFF;
`

export const CaretDown = styled(Icon.CaretDown)``
