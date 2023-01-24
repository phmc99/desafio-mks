import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderLogo = styled.span`
  color: white;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.md};
  .mks {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 600;
  }
`;

export const HeaderCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
`;
