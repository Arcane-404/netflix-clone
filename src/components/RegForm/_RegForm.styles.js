import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: grid;
	place-content: center;
	height: 800px;
`

export const Inner = styled.form`
	max-width: 400px;
	margin: 0 auto;
	/* border: 1px solid black; */
`

export const PreTitle = styled.p`
	font-size: 0.85rem;
`

export const Span = styled.span`
	font-family: ${ ({ theme }) =>  theme.fontFamily.primary };
	font-weight: 900;
`

export const Title = styled.h1`
	font-size: 1.5rem;
`

export const SubTitle = styled.h2`
	font-size: 1.15rem;
	margin-bottom: 1rem;

`

export const Frame = styled.div`
	position: relative;
	height: 50px;
	width: 100%;
	background: transparent;
`

export const Label = styled.label`
	position: absolute;
	z-index: -5;
	top: 1rem;
	margin-left: 0.5rem;

	${ ({ focus }) => {
		if (focus) {
			return css`
				animation: moveFocus ease-in-out 0.25s;
				animation-fill-mode: forwards;

				@keyframes moveFocus {
					from {
						top: 1rem;
					}
					to {
						top: 0.25rem;
						font-size: 0.8rem;
					}
				}
			`
		}
	} }
`

export const Input = styled.input`
	height: 100%;
	width: 100%;
	position: relative;
	padding-left: 0.5rem;
	background: transparent;
	border: 1px solid gray;

	:focus {
		border: 1px solid #0071eb;
	}
`

export const Button = styled.button`
	width: 100%;
	height: 50px;
	background: ${ ({ theme }) => theme.colors.primary._400 };
	color: #fff;

	:hover {
		background: ${ ({ theme }) => theme.colors.primary._300 };
	}
`

