import React from 'react'
import {
	Container,
	ImageBox,
	Title,
	Image,
	ControlBox,
	Button,
	Play,
	Save,
	MoreInfo,
	Body,
	MetaInfo,
	Info,
	MetaTags,
	Tag
} from './_Modal.styles'

export default function Modal ({ children, ...restProps }) {
	return <Container { ...restProps }> { children } </Container>
}

Modal.ImageBox = function ModalImageBox ({ children, ...restProps }) {
	return <ImageBox { ...restProps }> { children } </ImageBox>
}

Modal.Title = function ModalTitle ({ children, ...restProps }) {
	return <Title { ...restProps }> { children } </Title>
}

Modal.Image = function ModalImage ({ ...restProps }) {
	return <Image { ...restProps } />
}

Modal.ControlBox = function ModalControlBox ({ children, ...restProps }) {
	return <ControlBox { ...restProps }> { children } </ControlBox>
}

Modal.Button = function ModalButton ({ children, ...restProps }) {
	return <Button { ...restProps }> { children } </Button>
}

Modal.Play = function ModalPlay ({ ...restProps }) {
	return <Play { ...restProps } />
}

Modal.Save = function ModalSave ({ ...restProps }) {
	return <Save { ...restProps } />
}

Modal.MoreInfo = function ModalMoreInfo ({ ...restProps }) {
	return <MoreInfo { ...restProps } />
}

Modal.Body = function ModalBody ({ children, ...restProps }) {
	return <Body { ...restProps }> { children } </Body>
}

Modal.MetaInfo = function ModalMetaInfo ({ children, ...restProps }) {
	return <MetaInfo { ...restProps }> { children } </MetaInfo>
}

Modal.Info = function ModalInfo ({ children, ...restProps }) {
	return <Info { ...restProps }> { children } </Info>
}

Modal.MetaTags = function ModalMetaTags ({ children, ...restProps }) {
	return <MetaTags { ...restProps }> { children } </MetaTags>
}

Modal.Tag = function ModalTag ({ children, ...restProps }) {
	return <Tag { ...restProps }> { children } </Tag>
}
