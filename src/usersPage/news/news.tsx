import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../../component/card/card.component';
import Sidebar from '../../component/sidebar/sidebar.component';

const SCardGroup = styled(CardGroup)`
  padding: 0;
  padding-top: 10em;
  padding-bottom: 2em;
  gap:1em;
`

const News = () => {
    return (
      <>
      <Row>
      <Col xs={12} m={6} lg={8}>

        <SCardGroup>
        <Row xs={1} md={2} lg={2} xl={3}>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
         
        </Row>
        </SCardGroup>
      </Col>
        <Col>
        <Sidebar/>
        </Col>
      </Row>
      </>
    );
  }

  export default News;