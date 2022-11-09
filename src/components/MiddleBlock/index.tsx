import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Upload from "../../components/Convert/upload";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
  id: any;
}

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
  
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id} >
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Upload />
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
