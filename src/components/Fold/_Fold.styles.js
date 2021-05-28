import styled from 'styled-components'

export const Container = styled.div`
	/* border: 5px solid slategray; */
	height: 70vh;
	position: relative;

	@media ${({ theme }) => theme.breakpoints.tablet.sm } {
		height: 100vh;
	}
`
