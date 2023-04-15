import styled, { css } from 'styled-components';

const googleRedirect = css`
  margin-top: 10px;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ google_redirect }) => google_redirect && googleRedirect};
`;
