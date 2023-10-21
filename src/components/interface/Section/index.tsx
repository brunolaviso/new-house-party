import { ReactNode } from "react";
import { Container } from "../Container";
import { Content, SectionWrapper, Title } from "./styles";
import { LeafBranch } from "../../icons/LeafBranch";

interface SectionProps {
  title?: string;
  backgroundcolor?: string;
  children: ReactNode;
}

export function Section({ title, backgroundcolor, children }: SectionProps) {
  return (
    <SectionWrapper backgroundcolor={backgroundcolor}>
      <Container>
        {title && <Title>{title}</Title>}
        <LeafBranch fill="#529471"/>
        <Content>
          {children}
        </Content>
      </Container>
    </SectionWrapper>
  )
}