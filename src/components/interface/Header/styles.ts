import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  background-color: #529471;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  nav { 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`