import styled from 'styled-components';
import BackButton from './BackButton';

const Options = (props) => {
    
  return (
    <OptionsContainer>
        <BackButton />
        <TitleText>OPTIONS</TitleText>
        <Button>OPTION 1</Button>
        <Button>OPTION 2</Button>
        <Button>OPTION 3</Button>
        <Button>OPTION 4</Button>
        <Button>OPTION 5</Button>
    </OptionsContainer>
  );
}

export default Options;

const OptionsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 7%;
    height: 50rem;
    justify-content: center;
    max-width: 1100px;
    width: 60%;
`;

const TitleText = styled.div`
    color: #ccc;
    font-family: 'Kanit';
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 4px 3px 5px black;
`;

const Button = styled.div`
    background-color: rgba(255,255,255,0.055);
    border: 0px solid transparent;
    border-radius: 10px;
    box-shadow: inset 3px 4px 8px black;
    color: black;
    cursor: pointer;
    font-family: 'Kanit';
    font-size: 3.5rem;
    font-weight: 500;
    left: 2rem;
    line-height: 5rem;
    text-shadow: 0px 0px 0px transparent;
    transition: all 0.2s ease;
    top: 2rem;
    width: 70%;
    &:hover {
        background-color: rgba(255,255,255,0.095);
        box-shadow: inset 4px 6px 10px black;
    }
`;