import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Clock = (props) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [tenths, setTenths] = useState(0);

    let paddedTenths = tenths.toString().padStart(2, '0');
    let paddedSeconds = seconds.toString().padStart(2, '0');
    let paddedMinutes = minutes.toString().padStart(2, '0');


    useEffect(() => {
        let interval = setInterval(() => {
            if (tenths < 9) {
                setTenths(tenths + 1)
            } else {
                setTenths(tenths * 0);
                if (seconds < 59) {
                    setSeconds(seconds + 1);
                } else {
                    setSeconds(seconds * 0);
                    setMinutes(minutes + 1);
                }
            }
            props.totalTime.current++;
        }, 100);
        return () => {
            clearInterval(interval);
        };
    });


    return (
        <ClockWrapper> {paddedMinutes}:{paddedSeconds}:{paddedTenths} </ClockWrapper>
    );
}

export default Clock;

const ClockWrapper = styled.div`
    color: white;
    font-family: 'Fira Sans';
    font-size: 2.9rem;
    font-weight: 500;
    right: 2%;
    position: absolute;
    top: 2%;
    width: 10rem;
    z-index: 20;
    @media (max-width: 1800px) {
        font-size: 2.4rem;
        width: 8rem;   
    }
`;