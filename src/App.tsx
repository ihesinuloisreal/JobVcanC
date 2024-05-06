
import styled from 'styled-components';
import './App.css'

import Alert from 'react-bootstrap/Alert';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {

  return (
    <>
    <Alert dismissible variant="danger">
      <Alert.Heading>Ops.. snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
    </Alert>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
    </Wrapper>
    </>
  )
}

export default App
