import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:easygeo@techimpact.org">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Title>{t("Service")}</Title>
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>591 Collaboration Way</Para>
              <Para>Suite 601</Para>
              <Para>Newark DE 19173</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Press")}
              </Large>
              <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/de-data-lab"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/de-data-lab"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/de-data-lab/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@de-data-lab/"
                src="medium.svg"
              />
              
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
