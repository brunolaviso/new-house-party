import styled from "styled-components";

export const CountdownWrapper = styled.div`
  width: 100%;
  background-color: #529471;
  height: 18.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: #ffffff;
    font-size: 2rem;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Card = styled.div`
  width: 6rem;
  height: 6rem;
  color: #ffffff;
  font-size: 1rem;
  background-color: #6eb38e;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 48rem) {
    width: 4.5rem;
    height: 4.5rem;
  }

  strong {
    font-size: 2rem;

    @media (max-width: 48rem) {
      font-size: 1.5rem;
    }
  }

  span {
    font-size: 0.75rem;

    @media (max-width: 48rem) {
      font-size: 0.625rem
    }
  }
`
