import styled, { css } from "styled-components";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Login } from "@styled-icons/material-outlined/Login";
import { LockAlt } from "@styled-icons/boxicons-regular/LockAlt";

export const MYFATHER = styled.div`
  display: flex;
  gap: 2rem;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
`;

export const LOGO = styled.img`
  padding: 2rem;
`;

export const LOGOMAIN = styled.div`
  @media screen and (max-width: 1280px) {
    align-items: center;
    display: flex;
    margin: 3rem 0 0 0;
    justify-content: center;
    padding: 2rem;
    
  }
`;

export const MAIN = styled.form`
  background-color: var(--secondary-color);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 11rem 4.62rem;
  border-radius: 1rem;
  box-sizing: border-box;
  width: 572px;
  height: 512px;

  h2 {
    color: var(--primary--color--title);
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #afb6c2;
  }

  @media screen and (max-width: 1280px) {
    align-items: center;
    display: flex;
    margin: 1rem 0 0 0;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    margin: 1rem 0 0 0;
    background-color: var(--primary-color);
    text-align: center;
    width: 100vw;
  }
`;

export const EMAILOUT = styled(EmailOutline)`
  color: var(--primary--color--Button--icons);
  width: 1.3rem;
`;

export const ICONSLOGIN = styled(Login)`
  color: var(--primary--color--Button--icons);
  width: 1.5rem;
  height: 1.5rem;
`;

export const PADLOCK = styled(LockAlt)`
  color: var(--primary--color--Button--icons);
  width: 1.5rem;
  height: 1.5rem;
`;

export const INPUT = styled.input`
  outline: none;
  height: 44px;
  border: 1px solid var(--primary--color--paragraph);
  border-radius: 4px;
  width: 335px;
  left: 193px;
  top: 369px;
  background-color: transparent;
  color: white;
  font-weight: 400;
  font-size: 18px;



  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-left: 0.5rem;
  }
  :focus {
    box-shadow: 0px 0px 0px 2px #ffde88;
    border: none;
  }
`;

export const SECTION = styled.section`
  display: flex;
  margin: 1rem 0 0 0;
  gap: 5rem;
  align-self: center;

  label {
    align-items: center;
    display: flex;
  }

  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
    color: var(--primary--color--Button--icons);
  }
`;

export const BUTTON = styled.button`
  width: 334px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  margin: 2rem 0 0 0;
  background-color: var(--primary--color--Button--icons);
  border-radius: 8px;
  outline: none;
  :hover {
    cursor: pointer;
    background-color: var(--primary--color--Button--hover);
  }
`;

export const Paragraph = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--primary--color--Button--icons);
  line-height: 21px;
  margin: 0.6rem 0 0 0;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  border: 1px solid #aaa;
  border-radius: 4px;
  appearance: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  display: flex;

  &:checked {
    background-color: var(--primary--color--Button--icons);
  }
`;

export const SIDE = styled.div`
  flex: 1;
  margin: 0;
  height: 100vh;

  img {
    box-sizing: border-box;
    height: 99.59%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1279px) {
    position: absolute;
    display: flex;
    right: 0;
    img {
      height: 0%;
      width: 0%;
      border-radius: 1rem;
    }
  }
`;
