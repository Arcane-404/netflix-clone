import { Container, Hero } from './_Fold.styles'

export default function Fold ({ children, ...restProps }) {
	return (<Container { ...restProps }>{ children }</Container>)
}

Fold.Hero = function FoldHero ({ children, ...restProps }) {
	return (<Hero { ...restProps }>{ children }</Hero>)
}
