import styled, { css } from "styled-components";

type Props = {
    isGoogleSignIn?: boolean,
    inverted?: boolean
}

const customButtonStyle = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`;

const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyle = css`
    background-color: rgb(31, 98, 223);
    color: white;

    &:hover{
    background-color: rgb(81, 81, 240);
    border: none;
    }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }: Props) => {
    if (isGoogleSignIn) {
        return googleSignInStyle;
    }

    if (inverted) {
        return invertedButtonStyle;
    }

    return customButtonStyle;
}



export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;