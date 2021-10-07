import styled from 'styled-components';

const LevelCard = (props) => {
    
  const { image, name } = props;

  return (
      <Container img={image}>
          <CardPanel>&#10036; {name} &#10036;</CardPanel>
      </Container>
  );
}

export default LevelCard;

const Container = styled.div`
    align-items: start;
    border: 2px solid rgba(200,200,200,0.5);
    border-radius: 10px;
    box-shadow: 7px 7px 18px 3px rgba(10, 10, 10, 0.6);
    display: flex;
    height: 100%;
    justify-self: end;
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: 3px;
    overflow: hidden;
    position: relative;
    width: 80%;
    z-index: 10;
    @media (max-width: 1500px) {
        width: 100%;
    }
    &:hover > div {
        transform: translateY(0.1%);
    }
    &:before {
        background-image: url(${props => props.img});
        background-position: center center;
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: none;
        transition: all 0.4s ease-in-out;
        width: 100%;
    }
    &:hover:before {
        filter: blur(2px) grayscale(85%);
        transform: scale(1.03);
    }
`;

const CardPanel = styled.div`
    align-items: center;
    background-color: #6b0607;
    box-shadow: 3px 3px 2px 2px rgba(10, 10, 10, 0.6);
    color: #fdc91f;
    display: flex;
    font-size: 1.5rem;
    font-weight: 800;
    height: 12.5%;
    justify-content: center;
    opacity: 0.9;
    text-decoration: none;
    text-transform: uppercase;
    transform: translateY(-100%);
    transition: all 0.4s ease-in-out;
    width: 100%;
    z-index: 10;
    @media (max-width: 1500px) {
        height: 18%;
        transform: none;
    }
`;