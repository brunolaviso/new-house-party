import styled from "styled-components";

interface SectionWrapperProps {
  backgroundcolor?: string;
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  width: 100%;
  background-color: ${(props) => props.backgroundcolor || "#fff"};
  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 1.5rem;
    line-height: 1.75rem;

    &.italic {
      font-style: italic;
    }
  }
`
