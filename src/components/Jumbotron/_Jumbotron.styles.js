import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5%;
`

export const Inner = styled.div`
	border: 3px solid red;
	max-width: 950px;
	margin: 0 auto;
	padding: 0.938em 0;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		padding: 1.875em 0;
	}

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		padding: 4.688em 0;
	}
	/* 4.688em */
	/* padding: 3.125em 0; */
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.light };
	font-family: ${({ theme }) => theme.fontFamily.primary };
	font-size: ${({ theme }) => theme.fontSize.headline.sm };
	line-height: 1.1;
	text-align: center;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		font-size: ${({ theme }) => theme.fontSize.headline.lg };
		max-width: 16ch;
		margin: 0 auto;
	}
`

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.colors.light };
	font-size: ${({ theme }) => theme.fontSize.subhead.sm };
	margin: 1em auto;
	text-align: center;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		font-size: ${({ theme }) => theme.fontSize.subhead.lg };
	}
`

export const Image = styled.img`
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	user-select: unset;
	z-index: -1;
`
