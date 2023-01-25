import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;
