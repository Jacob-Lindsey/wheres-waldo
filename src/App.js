import './App.css';
import { useState } from 'react';
import DrawBoundingBox from './utils/drawBoundingBox';
import ImageWrapper from './components/ImageWrapper';
import styled from 'styled-components';

function App() {

  const [selections, setSelections] = useState([]);
  const allSelections = [...selections]; 
  const drawCircle = () => {DrawBoundingBox()};

  return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
        <ImageWrapper draw={drawCircle} />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;