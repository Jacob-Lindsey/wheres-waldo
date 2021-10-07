import './App.css';
import styled from 'styled-components';
import Routes from './Routes';

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  @media (max-width: 1500px) {
    align-items: start;
  }
`;