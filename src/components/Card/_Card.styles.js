import styled, { css } from 'styled-components'

export const Container = styled.div`
  border: 1px solid red;
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: #181818;
	width: 100%;
  position: relative;
  overflow: hidden;

	/* ${({ isLgRow }) => isLgRow && css`height: 250px;`} */
`

export const Image = styled.img``

export const Title = styled.h3`
  color: #FFF;
  text-align: center;
  width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
  position: absolute;
`
