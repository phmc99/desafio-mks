import styled from 'styled-components';

export const CartListContainer = styled.div`
  width: 80vw;
  height: 100vh;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  right: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  animation: slideInFromLeft 0.5s ease-in;
  @keyframes slideInFromLeft {
    from {
      transform: translateX(110%);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (min-width: 1024px) {
    max-width: 520px;
  }
`;

export const CartListUl = styled.ul`
  padding: 0 ${({ theme }) => theme.spacing.md};
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: silver;
  }
  ::-webkit-scrollbar-thumb:active {
    background: gray;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-track:active {
    background: transparent;
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CartListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
  }

  @media (min-width: 1024px) {
    padding: 1rem ${({ theme }) => theme.spacing.lg};
  }
`;

export const CartListCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: 42px;
  max-height: 42px;
  border-radius: 50%;
  background-color: black;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  @media (min-width: 1024px) {
    color: white;
  }
`;

export const CartListTotal = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  @media (min-width: 1024px) {
    padding: 1rem ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.xl};

    h1 {
      color: white;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const CartListCheckoutButton = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-weight: 600;
  color: white;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.md} 0;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
