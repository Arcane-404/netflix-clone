import { Container } from './_Wrapper.styles'

export default function Wrapper ({ children, ...props }) {
	return (<Container { ...props }>{ children }</Container>)
}
