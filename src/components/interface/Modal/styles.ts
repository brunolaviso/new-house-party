import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  background-color: #00000080;
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  input {
    border: 1px solid #ccc;
    border-radius: 16px;
    width: 100%;
    max-width: 300px;
    padding: 8px 16px;
    outline: transparent;
    font-size: 1rem;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border-color: #888;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const CloseButton = styled(Dialog.Close)`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  background-color: #ffffff;
  border: 1px solid #529471;
  font-size: 1rem;
  color: #529471;
  
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #397655;
    color: #397655;
  }
`

export const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #529471;
  border: none;
  font-size: 1rem;
  color: white;
  
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #397655;
  }
`