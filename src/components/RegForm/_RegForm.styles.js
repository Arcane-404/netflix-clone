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
	height: 60px;
	width: 100%;
	background: transparent;
	margin-bottom: 1.5rem;

	p {
		color: red;
		font-size: 0.8rem;
	}
`

export const Label = styled.label`
	position: absolute;
	z-index: -5;
	/* top: 1rem; */
	transform: translateY(100%);
	margin-left: 0.5rem;
	color: #8c8c8c;

	${ ({ focus }) => {
		if (focus) {
			return css`
				animation: moveFocus ease-in-out 0.25s forwards;

				@keyframes moveFocus {
					from {
						transform: translateY(100%);
					}
					to {
						transform: translateY(30%);
						font-size: 0.8rem;
						font-family: ${ ({ theme }) =>  theme.fontFamily.primary };
						font-weight: 500;
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

	${ ({ error, emailRequiredMessage, passwordRequiredMessage }) => {
		if (error) {
			return css`
				border: 1px solid red;
			`
		}
	}}
`

export const Button = styled.button`
	width: 100%;
	height: 50px;
	background: ${ ({ theme }) => theme.colors.primary._400 };
	color: #fff;
	margin-top: 1rem;

	:hover {
		background: ${ ({ theme }) => theme.colors.primary._300 };
	}
`

