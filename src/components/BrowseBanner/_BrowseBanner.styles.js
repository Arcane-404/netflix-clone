import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Inner = styled.div``
export const Group = styled.div``
export const Title = styled.h1``
export const InfoBox = styled.ul``
export const Info = styled.li``
export const CtaBox = styled.div``
export const Button = styled.button.attrs({
	type: 'button'
})`
	${({ info }) => info && css``}

	${({ play }) => play && css``}
`
