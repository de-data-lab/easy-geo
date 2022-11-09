import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background-image: radial-gradient(circle farthest-corner at 50% 50%,rgba(73,85,107,.4),transparent 70%),linear-gradient(180deg,#000,#171b24 80%);
  color: #aec8fc;
  padding: 2.5rem 0;
  a {
    color: #aec8fc;
  }
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #aec8fc;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #aec8fc;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  color: #aec8fc;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  color: #aec8fc;
`;

export const Para = styled("div")`
  font-size: 14px;
  width: 70%;
  color: #aec8fc;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: var(--buttonBg);
    text-underline-position: under;
    text-decoration: var(--buttonBg) solid underline;
  }
`;

export const Chat = styled("p")`
  color: #aec8fc;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
  color: #aec8fc;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  color: #aec8fc;
  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    color: #aec8fc;
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #aec8fc;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #aec8fc;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  color: #aec8fc;
  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
  color: #aec8fc;
`;
