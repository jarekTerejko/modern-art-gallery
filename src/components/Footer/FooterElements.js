import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ darkBg }) =>
    darkBg ? "var(--color-dark)" : "var(--color-accent)"};
  color: ${({ darkBg }) =>
    darkBg ? "var(--color-light)" : "var(--color-dark)"};
`;

export const FooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 7rem 0;
`;

export const FooterSocialLinksList = styled.ul`
  grid-column: 11/13;
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

export const FooterSocialLinkItem = styled.li`
  margin: 0 1rem;
  
  &:last-of-type {
    margin-right: 0;
  }
`;

export const FooterSocialLink = styled.a``;

export const FooterLinkR = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: inherit;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-family: var(--font-heading);
  grid-column: 1/3;
`;
