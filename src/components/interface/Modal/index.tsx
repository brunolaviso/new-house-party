import * as Dialog from '@radix-ui/react-dialog';
import { ButtonsWrapper, CloseButton, ConfirmButton, Content, Overlay } from './styles';

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Modal({ open, setOpen }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Overlay />
      <Content>
        <Dialog.Title>Confirmar presente</Dialog.Title>
        <Dialog.Description>Insira o seu nome para reservarmos o presente</Dialog.Description>
        <input type="text" placeholder='Insira o nome aqui' />
        <ButtonsWrapper>
          <CloseButton>Cancelar</CloseButton>
          <ConfirmButton>Confirmar</ConfirmButton>
        </ButtonsWrapper>
      </Content>
    </Dialog.Root>
  )
}
