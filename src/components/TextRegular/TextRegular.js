import styled from "styled-components";

export const TextRegular = styled.p`
  font-size: 1.6rem;
  color: var(--color-dark);
  font-size: 2.2rem;
  line-height: 1.6;
  max-width: ${({ headerText }) => (headerText ? "35rem" : "")};
  margin-bottom: ${({ headerText }) => (headerText ? "7rem" : "")};

  @media screen and (max-width: 768px) {
    font-size: ${({ headerText }) => (headerText ? "1.8rem" : "")};
    margin-bottom: ${({ headerText }) => (headerText ? "5rem" : "")};
  }

  @media screen and (max-width: 375px) {
    margin-bottom: ${({ headerText }) => (headerText ? "rem" : "")};
  }
`;
