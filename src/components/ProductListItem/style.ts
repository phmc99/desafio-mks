import styled from 'styled-components';

export const ProductListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  max-width: 260px;

  img {
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (min-width: 768px) {
  }
`;

export const ProductListItemNamePrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const ProductListItemPrice = styled.h2`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ProductListItemDescription = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};

  p {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.xs};
    max-width: 260px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const ProductListItemButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  border: 0;
  border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;
