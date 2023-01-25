import styled from 'styled-components';

export const ProductListContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 520px) {
    padding: ${({ theme }) => theme.spacing.lg};
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xl};
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`;
