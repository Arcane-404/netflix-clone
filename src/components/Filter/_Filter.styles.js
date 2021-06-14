import styled from 'styled-components'

export const Container = styled.ul`
	border: 3px solid red;
	display: flex;
	margin-left: 3.25em;
`

export const Text = styled.li`
	/* border: 2px solid pink; */
	color: #E5E5E5;
	font-size: 0.875rem;
	cursor: pointer;
	transition: 0.4s ease;
	transition-property: color;

	&.active {
		color: #FFF;
		font-weight: 700;
	}
	&:not(.active):hover { color: #B3B3B3; }
	& + li { margin-left: 1.125em; }

	${({ primary }) => primary && css`
		color: ${({ theme }) => theme.colors.primary._400 };
		font-size: 1rem;
		font-weight: 700;
		&:hover { color: red !important; }
	`}
`
