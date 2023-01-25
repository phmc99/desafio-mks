import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #aa0000;
  }
`;

export const SkeletonFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 260px;
`;

export const SkeletonLarge = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
