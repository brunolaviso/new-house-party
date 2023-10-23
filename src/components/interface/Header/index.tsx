import { Container } from "../Container";
import { HeaderWrapper } from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <nav>
          <a href="">Home</a>
          <a href="">O casal</a>
          <a href="#gifts-list">Lista de presentes</a>
          <a href="">Localização</a>
        </nav>
      </Container>
    </HeaderWrapper>
  )
}