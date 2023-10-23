import styled from "styled-components";

export const CardProductWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  a {
    height: 200px;
    
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    img {
      max-height: 100%;
      max-width: 300px;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  span {
    font-size: 1rem;
    margin-top: 2rem;
  }

  strong {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  button {
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    background-color: #529471;
    border: none;
    font-size: 1.25rem;
    color: white;
    
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #397655;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`