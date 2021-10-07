import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() =>
            updateClock(), 1000);
        return () => clearInterval(interval);
    });

    const updateClock = () => {
        setTime(new Date().toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }));
    };

    return (
        <ClockWrapper> {time} </ClockWrapper>
    );
}

export default Clock;

const ClockWrapper = styled.div`
    color: gold;
    font-family: 'Fira Sans';
    font-size: 3rem;
    font-weight: 600;
    left: 1.2%;
    outline: 5px solid rgba(20,20,20,0.3);
    position: absolute;
    top: 2%;
    width: 10rem;
    z-index: 20;
    @media (max-width: 1800px) {
        font-size: 2.4rem;
        width: 8rem;   
    }
`;