import styled, { css } from 'styled-components';

type Props = {
  isSmall?: boolean;
};

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const smallSpinner = css`
  width: 20px;
  height: 20px;
`;

const bigSpinner = css`
  width: 50px;
  height: 50px;
`;

const getSpinnerStyles = ({ isSmall }: Props) => {
  if (isSmall) {
    return smallSpinner;
  }

  return bigSpinner;
}

export const SpinnerContainer = styled.div`
  display: inline-block;
  ${getSpinnerStyles}
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
