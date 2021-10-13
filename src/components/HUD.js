import hudBg from '../images/hud-texture.jpg';
import styled from 'styled-components';

const HUD = (props) => {

  const gameData = { ...props.gameData }; 
  
  return (
    <Container>
        <Panel>
          <PanelContent>
            {props.isGameStarted ? 
              gameData.items.map((item, index) => {
                return (
                  <>
                    {item.found === true
                      ? <PanelItemFound>{item.name}</PanelItemFound>
                      : <PanelItem>{item.name}</PanelItem>
                    }
                  </>
                )
              })
              : 
              <PanelItem>Waiting For Game to Start</PanelItem>
            }
          </PanelContent>
        </Panel>
    </Container>
  );
}

export default HUD;

const Container = styled.div`
    bottom: 0;
    display: flex;
    position: fixed;
    width: 100%;
    opacity: 0.9;
    @media (max-width: 1000px) {
      z-index: 10;
    }
`;

const Panel = styled.div`
    background-image: url(${hudBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 125% 250%;
    box-shadow: 0px -5px 40px 8px black;
    display: flex;
    height: 10rem;
    justify-content: center;
    position: relative;
    width: 100%;
    &:before {
        background: rgba(30, 25, 1, 1);
        background: linear-gradient(to right, rgba(98, 55, 1, 0.3), rgba(1, 1, 1, 0.5));
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.8;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

const PanelContent = styled.div`
    column-gap: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 0.5rem;
    padding: 0 30px;
    max-width: 1920px;
    @media (max-width: 1000px) {
         gap: 2%;
    }
`;

const PanelItem = styled.p`
    align-items: center;
    color: #000;
    display: flex;
    font-family: 'Helvetica Neue';
    font-size: 1.5rem;
    font-weight: 600;
    justify-content: center;
    line-height: 3rem;
    margin: 0;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
`;

const PanelItemFound = styled.p`
    align-items: center;
    color: #000;
    display: flex;
    font-family: 'Domine';
    font-size: 1.25rem;
    font-weight: 800;
    justify-content: center;
    line-height: 3rem;
    margin: 0;
    opacity: 0.4;
    text-transform: uppercase;
    text-decoration: line-through;
    text-decoration-color: rgba(10,0,10,0.6);
    text-decoration-style: wavy;
    text-decoration-thickness: 4px;
    @media (max-width: 1000px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
`;