import { Container } from './_Fold.styles'

export default function Fold ({ children, ...restProps }) {
	return (<Container { ...restProps }>{ children }</Container>)
}
