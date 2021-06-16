import styled from 'styled-components'

export const Container = styled.div`
		background: black;
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 100vw;
    flex-direction: column;

    @media (max-width: 1080px) {
        padding: 70px 30px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
    }
`

export const Link = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer'
})`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`

export const Title = styled.p`
    color: #757575;
    font-size: 16px;
    margin-bottom: 40px;
`

export const Call = styled.a``

export const Text = styled.p`
    color: #757575;
    font-size: 13px;
    margin-bottom: 40px;
`

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`
