import styled from 'styled-components'

export const Container = styled.div`
  border: 5px solid red;
	margin-top: -16em;
`

export const Result = styled.div`
  border: 3px solid blue;
	/* margin-top: -10em; */
  position: relative;

  & .swiper-container {
    padding: 0 4%;
  }

  & .swiper-wrapper {
    padding: 20px 0;
    /* padding: 50px 0; */
  }

  /* & .swiper-slide {} */

  & .swiper-button-prev,
  & .swiper-button-next
  {
    /* background: rgba(20,20,20, 0.5); */
    background: #000;
    color: #FFF;
    width: 4%;
    height: 100%;
    margin: 0;
    top: 0;

    &::after {
      font-size: 4vw;
      font-weight: 600;
      transition: transform 0.1s ease-out;
    }
  }

  & .swiper-button-prev { left: 0; }
  & .swiper-button-next { right: 0; }

  @media (min-width: 500px) {
    & .swiper-button-prev::after,
    & .swiper-button-next::after
    {
      display: none;
      font-size: 2.4vw;
    }

    & .swiper-button-prev:hover::after,
    & .swiper-button-next:hover::after
    { transform: scale(1.25); }

    & .swiper-container:hover .swiper-button-prev::after,
    & .swiper-container:hover .swiper-button-next::after
    { display: block; }
  }
`

export const Title = styled.h2`
	color: #FFF;
	margin-left: 4vw;
`
