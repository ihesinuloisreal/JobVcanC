import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const SAlert = styled(Alert)`
  background-color: #3dd4;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  padding-top: 10em;
  background: papayawhip;
`;

const Home = () =>(
    <Wrapper>
      <SAlert dismissible variant="danger">
      <Alert.Heading>Oh.. snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
      </SAlert>
        <Title>
          Hello World!
        </Title>
    </Wrapper>
)

export default Home;