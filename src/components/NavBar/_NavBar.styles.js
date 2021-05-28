import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 0 5%;
	position: absolute;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		padding: 0 2.812em;
	}

	@media ${({ theme }) => theme.breakpoints.tablet.lg } {
		padding: 0 3.5em;
	}
`

export const Inner = styled.div`
	max-width: 1920px;
	margin: 0 auto;
	height: 100%;
	padding-top: 1.625em;
	display: flex;
	justify-content: space-between;
`

export const Logo = styled.img`
	width: auto;
	height: 1.5rem;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		width: 6.75rem;
    height: 2rem;
	}

	@media ${({ theme }) => theme.breakpoints.tablet.lg } {
		width: 8.375rem;
    height: 2.25rem;
	}

	@media ${({ theme }) => theme.breakpoints.desktop } {
		width: 10.4375rem;
    height: 2.8125rem;
	}
`

export const Button = styled.button`
	border-radius: ${({ theme }) => theme.radius.round.sm };
	background: ${({ theme }) => theme.colors.primary._400 };
	color: ${({ theme }) => theme.colors.light };
	font-size: 0.9rem;
	padding: 0.4em;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		font-size: inherit;
		padding: 0.438em 1.062em;
	}
`
