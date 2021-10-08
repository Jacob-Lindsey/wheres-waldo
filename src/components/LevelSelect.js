import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GameImageData } from './GameImageData';
import BackButton from './BackButton';
import LevelCard from './LevelCard';

const LevelSelect = () => {

  return (
    <>
      <BackButton />
      <Container>
        <Link to='/game/1'>
            <LevelCard
                level={GameImageData[0].level}
                name={GameImageData[0].name}
                image={GameImageData[0].image}
            />
        </Link>
        <Link to='/game/2'>
            <LevelCard
                level={GameImageData[1].level}
                name={GameImageData[1].name}
                image={GameImageData[1].image}
            />
        </Link>
        <Link to='/game/3'>
            <LevelCard
                level={GameImageData[2].level}
                name={GameImageData[2].name}
                image={GameImageData[2].image}
            />
        </Link>
      </Container>
    </>
  );
}

export default LevelSelect;

const Container = styled.div`
  display: grid;
  gap: 4%;
  grid-template-columns: 33% 33% 33%;
  margin-top: 7.5%;
  min-height: 45rem;
  width: 75%;
 
  @media (max-width: 1500px) {
    gap: 10rem;
    grid-template-columns: 100%;
    grid-auto-rows: 65rem;
    margin: 4rem 0 6rem 0;
    width: 65%;
  }
`;