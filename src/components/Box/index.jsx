import React, { Children } from 'react'
import styled from 'styled-components'

const Container = styled.div``

export default function Box ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}
