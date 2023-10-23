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
  fetchProducts: () => void;
}

export function Modal({
  open,
  setOpen,
  currentProductId,
  fetchProducts,
}: ModalProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  function confirmPresent() {
    setLoading(true);
    api
      .patch(`products/${currentProductId}`, {
        fields: {
          guess: value,
        },
      })
      .then((response) => {
        console.log(response);
        fetchProducts();
        setOpen(false);
        setLoading(false);
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
        {loading ? (
          <span>Reservando...</span>
        ) : (
          <ButtonsWrapper>
            <CloseButton>Cancelar</CloseButton>
            <ConfirmButton onClick={confirmPresent}>Confirmar</ConfirmButton>
          </ButtonsWrapper>
        )}
      </Content>
    </Dialog.Root>
  );
}
