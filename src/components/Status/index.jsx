import styled from 'styled-components'

const Container = styled.div``
const Results = styled.div``
const Loading = styled.div``
const Errors = styled.div``

export default function Status ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Status.Results = function StatusResults ({ children, ...restProps }) {
	return <Results { ...restProps }> { children } </Results>
}

Status.Loading = function StatusLoading ({ ...restProps }) {
	return (
		<Loading { ...restProps }>
			<h1>loading — <span role="img" aria-label="load">🔃</span></h1>
		</Loading>
	)
}

Status.Errors = function StatusErrors ({ error, ...restProps }) {
	return (
		<Errors { ...restProps }>
			<h1>error — <span role="img" aria-label="error">📛</span></h1>
			<blockquote>{ error.message }</blockquote>
		</Errors>
	)
}

