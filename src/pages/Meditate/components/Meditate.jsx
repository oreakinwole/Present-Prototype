import React, { useState, useRef } from 'react';
import Header from '../../../components/Header';
import {
    LayoutWrapper, WidthWrapperCenter
} from '../../../components/reusablestyles/GlobalStyle';
import {
    StartCircle,
    RangeBar,
    PointsIndictor,
    CancelIndicator
} from './style';

import SideNav from '../../../components/SideNav';
import MedSong from '../../../assets/beach.mp3';
import { retrieveCurUser } from '../../../utility';

const Meditate = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [medTime, setMedTime] = useState(null);
    const song = useRef(null);
    const [songPlaying, setSongPlaying] = useState(false);
    const [currentPoints, setCurrentPoints] = useState(0);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    const doTimeUpdate = () => {
        setSongPlaying(true);
        const fakeDuration = 600;
        const { currentTime } = song.current;
        const elapsed = fakeDuration - currentTime;
        const seconds = Math.floor(elapsed % 60);
        const minutes = Math.floor(elapsed / 60);
        setMedTime(`${minutes}:${seconds}`);

        if (seconds % 10 === 0) {
            const newPoint = currentPoints + 10;
            setTimeout(() => {
                setCurrentPoints(newPoint);
            }, 1000);
        }
    };

    const doStopMusic = () => {
        song.current.pause();
        setMedTime('0:0');
    };

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title={retrieveCurUser()} />

            <WidthWrapperCenter onClick={() => setSidebarOpen(false)}>
                <StartCircle onClick={() => song.current.play()}><p>{!medTime ? 'Click Here To Start' : medTime}</p></StartCircle>
                <audio onTimeUpdate={doTimeUpdate} ref={song}>
                    <track kind="captions" />
                    <source src={MedSong} />
                </audio>
                <RangeBar />

                <PointsIndictor>{`${currentPoints} Points`}</PointsIndictor>
                {currentPoints > 0 && (
                    <p style={{
                        margin: '0',
                        fontSize: '.9em',
                        color: 'rgb(255,255,255, .70)',
                    }}
                    >
                        Focus! if you want more
                    </p>
                )}
                {songPlaying && (<CancelIndicator onClick={doStopMusic}><p> X </p></CancelIndicator>)}
            </WidthWrapperCenter>

        </LayoutWrapper>
    );
};

export default Meditate;
