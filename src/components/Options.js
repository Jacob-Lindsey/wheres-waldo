import styled from 'styled-components';
import BackButton from './BackButton';

const Options = (props) => {
    
  return (
    <OptionsContainer>
        <BackButton name='BACK' />
        <TitleText>OPTIONS</TitleText>
        <Wrapper>
            <span>SOUND</span>
            <Sound>
                <SubButton>OFF</SubButton>
                <SubButton>ON</SubButton>
            </Sound>
        </Wrapper>
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
    color: rgb(231,240,230);
    font-family: 'Kanit';
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 4px 3px 5px black;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    & > span {
        font-family: 'Kanit';
        font-size: 2.5rem;
    }
`;

const Sound = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
`;

const SubButton = styled.div`
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
    width: 45%;
    &:hover {
        background-color: rgba(255,255,255,0.095);
        box-shadow: inset 4px 6px 10px black;
    }
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