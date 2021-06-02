import React from 'react'
import { Container, Inner, Group, Title, InfoBox, Info, CtaBox, Button } from './_BrowseBanner.styles'

export default function BrowseBanner ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

BrowseBanner.Inner = function BrowseBannerInner ({ children, ...restProps }) {
	return <Inner { ...restProps }> { children } </Inner>
}

BrowseBanner.Group = function BrowseBannerGroup ({ children, ...restProps }) {
	return <Group { ...restProps }> { children } </Group>
}

BrowseBanner.Title = function BrowseBannerTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

BrowseBanner.InfoBox = function BrowseBannerInfoBox ({ children, ...restProps }) {
	return <InfoBox { ...restProps }> { children } </InfoBox>
}

BrowseBanner.Info = function BrowseBannerInfo ({ children, ...restProps }) {
	return <Info { ...restProps }> { children } </Info>
}

BrowseBanner.CtaBox = function BrowseBannerCtaBox ({ children, ...restProps }) {
	return <CtaBox { ...restProps }> { children } </CtaBox>
}

BrowseBanner.Button = function BrowseBannerButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}
