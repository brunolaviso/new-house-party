import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 90vh;

  background-image: url('/assets/hero-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 64px;
    text-align: center;
  }

  p {
    font-size: 24px;
  }
`

export const GridCardProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`

export const ImagePlaceWrapper = styled.div`
  max-width: 800px;

  img {
    width: 100%;
  }
`