import styled, { css } from 'styled-components'
import { screen } from '../_globals/'

export const Container = styled.div`
	background: black;
	color: #fff;
	width: 100%;
`

export const Frame = styled.div`
	border-top: 7px solid #222;
	width: 100%;

	:last-of-type {
		border-bottom: 7px solid #222;
	}
`

export const Inner = styled.div`
	/* border: 1px solid white; */
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.75rem 0;

	@media ${ screen.tablet.lg } {
		flex-direction: ${ ({ direction }) => direction };
		justify-content: space-between;
	}
`

export const ContentFrame = styled.div`
	text-align: center;

	@media ${ screen.desktop } {
		text-align: left;
		width: 50%;
	}
`

export const Title = styled.h1`
	font-size: 1.5rem;
	font-family: ${ ({ theme }) => theme.fontFamily.primary };

	@media ${ screen.tablet.sm } {
		font-size: 2.25rem;
	}
	@media ( min-width: 1300px ) {
		font-size: 3rem;
		width: 20ch;
	}
`

export const Subtitle = styled.h2`
	font-size: 1rem;

	@media ${ screen.tablet.lg } {
		font-size: 1.5rem;
		width: 30ch;
	}
`

export const ImageFrame = styled.div`
`

export const Image = styled.img``

export const Video = styled.video``
