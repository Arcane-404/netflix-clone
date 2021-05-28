import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
`

//Form, Title, Input, button, content, signup

export const Inner = styled.form`
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
`

export const Input = styled.input`
	height: 50px;
	padding: 1rem;
	border: none;
	border-radius: 0.5rem;
	background: #333;
	margin: 0.5rem 0;
	color: #fff;
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

