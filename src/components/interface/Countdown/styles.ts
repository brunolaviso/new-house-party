import styled from "styled-components";

export const CountdownWrapper = styled.div`
  width: 100%;
  background-color: #529471;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  h2 {
    color: #ffffff;
    font-size: 32px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Card = styled.div`
  width: 100px;
  height: 100px;
  color: #ffffff;
  font-size: 16px;
  background-color: #6eb38e;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  strong {
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  span {
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`
