import styled from "styled-components";

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