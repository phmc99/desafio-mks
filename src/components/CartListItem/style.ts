import styled from 'styled-components';

export const CartListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  max-width: 280px;
  background-color: white;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;

  img {
    padding: ${({ theme }) => theme.spacing.sm};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 100%;

    img {
      width: 100px;
      height: 100px;
    }

    h1 {
      width: 130px;

      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }
`;

export const CartListItemQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 1024px) {
    width: 45%;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CartListItemQuantityButton = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 2px 0;
  border-radius: ${({ theme }) => theme.spacing.xs};

  button {
    font-size: ${({ theme }) => theme.fontSize.lg};
    width: 1.8rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .quantity-value {
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    padding: 0 0.75rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    align-self: center;
  }
`;

export const CartListItemPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  width: 45%;
  overflow: hidden;

  @media (min-width: 1024px) {
    background-color: transparent;
    color: black;
    font-weight: 700;
    width: 35%;
  }
`;

export const CartListItemRemoveButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: pointer;

  @media (min-width: 1024px) {
    right: -10px;
    top: -5px;
    z-index: 3;
    background-color: black;
    color: white;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 25px;
    height: 25px;
  }
`;
