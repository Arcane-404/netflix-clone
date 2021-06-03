import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
`

export const Form = styled.form`
	width: 90%;
	height: 660px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	border-radius: 0.5rem;

	@media (min-width: 750px) {
		max-width: 450px;
		padding: 50px;
		background: rgba(0, 0, 0, 0.65);
	}
`

export const Title = styled.h1`
	color: #fff;
	font-family: ${ ({ theme }) => theme.fontFamily.primary } ;
`
export const InputFrame = styled.div`
	position: relative;
	width: 100%;
	height: 60px;
	margin-bottom: 2rem;
`

export const Label = styled.label`
	color: ${ ({ theme }) => theme.colors.neutral._600 };
	position: absolute;
	display: flex;
	top: 0;
	margin-left: 1rem;
	cursor: text;
	transition: 0.1s ease-in;
	transform: translateY(100%);
`

export const Input = styled.input`
	height: 100%;
	width: 100%;
	padding: 1.75rem 0 1rem 1rem;
	border: none;
	border-radius: 0.5rem;
	background: #333;
	color: #fff;
	z-index: 1;

	&:focus {
		background: #444;
	}

	&:focus + label,
	&:not(:placeholder-shown) + label {
		transform: translateY(30%);
		transition: 0.1s ease-in-out;
		font-size: 0.7rem;
	}
`

export const Error = styled.p`
	color: ${ ({ theme }) => theme.colors.orange };
	font-size: 0.7rem;
	border-top: 2px solid ${ ({ theme }) => theme.colors.orange };
	position: absolute;
	bottom: -15px;
	width: 95%;
	margin: 0 auto;
	left: 0;
	right: 0;
	height: 15px;
	padding-top: 0.25rem;

	&::after {
		content: ' ';
		border-bottom: 2px solid ${ ({ theme }) => theme.colors.orange };
		border-bottom-left-radius: 0.5rem;
		height: 10px;
		width: 10px;
		position: absolute;
		top: -12px;
		left: -7px;
	}

	&::before {
		content: ' ';
		border-bottom: 2px solid ${ ({ theme }) => theme.colors.orange };
		border-bottom-right-radius: 0.5rem;
		height: 10px;
		width: 10px;
		position: absolute;
		top: -12px;
		right: -7px;
	}
`

export const FirebaseError = styled.p`
	color: ${ ({ theme }) => theme.colors.orange };
	position: relative;
	font-family: ${ ({ theme }) => theme.fontFamily.primary };
`

export const Button = styled.button`
	height: 50px;
	padding: 1rem;
	background: red;
	font-weight: 700;
	color: #fff;
	border-radius: 0.5rem;
	margin-top: 2rem;
`

export const Frame = styled.div`
	display: flex;
	margin-top: 30px;
`

export const Content = styled.p`
	color: #777;
`

export const Link = styled.p`
	color: #fff;
	margin-left: 0.5rem;
	position: relative;
	:hover::before {
		content: '';
		position: absolute;
		width: 100%;
		border: 0.1px solid #fff;
		top: 20px;
	}
`

export const Checkbox = styled.input`
	margin: 1rem 0.5rem 0 0;
`

export const CheckboxLabel = styled.label`
	color: #777;
`

export const ReCaptchaHeader = styled.p`
	margin-top: 1rem;
	color: #777;
	font-size: 0.75rem;
`

export const LearnMoreLink = styled.span`
	cursor: pointer;
	color: #06e;

	:hover {
		border-bottom: 1px solid #06e;
	}
`

export const ReCaptchaBody = styled.p`
	margin-top: 1rem;
	font-size: 0.75rem;
	color: #777;
`

export const ReCaptchaLink = styled.a`
	color: #06e;
	cursor: pointer;

	:hover {
		border-bottom: 1px solid #06e;
	}
`

