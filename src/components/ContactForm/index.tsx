import { withTranslation } from "react-i18next";
import { ContactProps } from "./types";
import { ContactContainer } from "./styles";
import Price from "../price";

const Contact = ({ title, content, id, t }: ContactProps) => {

  return (
    <ContactContainer id={id}>
      <Price />
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
