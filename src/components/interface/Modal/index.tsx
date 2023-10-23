import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonsWrapper,
  CloseButton,
  ConfirmButton,
  Content,
  Overlay,
} from "./styles";
import { api } from "../../../services/api";
import { useState } from "react";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  currentProductId: string;
}

export function Modal({ open, setOpen, currentProductId }: ModalProps) {
  const [value, setValue] = useState("");

  function confirmPresent() {
    api.patch(`products/${currentProductId}`, {
      fields: {
        guess: value,
      },
    }).then((response) => {
      console.log(response);
      setOpen(false);
    });
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Overlay />
      <Content>
        <Dialog.Title>Confirmar presente</Dialog.Title>
        <Dialog.Description>
          Insira o seu nome para reservarmos o presente
        </Dialog.Description>
        <input
          type="text"
          placeholder="Insira o nome aqui"
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonsWrapper>
          <CloseButton>Cancelar</CloseButton>
          <ConfirmButton onClick={confirmPresent}>Confirmar</ConfirmButton>
        </ButtonsWrapper>
      </Content>
    </Dialog.Root>
  );
}
