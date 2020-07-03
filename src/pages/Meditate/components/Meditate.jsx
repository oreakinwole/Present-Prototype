import React, { useState, useRef } from 'react';
import Header from '../../../components/Header';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    WidthWrapperCenterMedi,
    StartCircle,
    RangeBar,
    PointsIndictor,
    SoundControls
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
        const fakeDuration = 180;
        let { currentTime } = song.current;
        const elapsed = fakeDuration - currentTime;
        const seconds = Math.floor(elapsed % 60);
        const minutes = Math.floor(elapsed / 60);
        setMedTime(`${minutes}:${seconds}`);

        if (seconds % 10 === 0 && !song.current.paused) {
            const newPoint = currentPoints + 10;
            setTimeout(() => {
                setCurrentPoints(newPoint);
            }, 1000);
        }

        if (currentTime >= fakeDuration) {
            song.current.pause();
            currentTime = 0;
        }
    };

    const checkPlaying = e => {
        if ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) {
            if (song.current.paused) {
                song.current.play();
            } else {
                song.current.pause();
                setSongPlaying(false);
            }
        }
    };

    const restart = e => {
        if ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) {
            song.current.currentTime = 0;
        }
    };

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title={retrieveCurUser()} />

            <WidthWrapperCenterMedi onClick={() => setSidebarOpen(false)}>
                <StartCircle onClick={checkPlaying}><p>{!medTime ? 'Click Here To Start' : medTime}</p></StartCircle>
                <audio onTimeUpdate={doTimeUpdate} onPlaying={() => setSongPlaying(true)} ref={song}>
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

                {
                    medTime
                    && (
                        <SoundControls>
                            <div
                                className="pp"
                                role="button"
                                onClick={checkPlaying}
                                onKeyPress={checkPlaying}
                                tabIndex={0}
                            >
                                { songPlaying ? (
                                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="90" fill="white" />
                                        <rect x="60" width="30" height="90" fill="white" />
                                    </svg>

                                )
                                    : (
                                        <svg width="90" height="90" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M68 39L0.499996 77.9711L0.5 0.0288552L68 39Z" fill="white" />
                                        </svg>

                                    )}

                            </div>
                            <div
                                className="replay"
                                role="button"
                                onClick={restart}
                                onKeyPress={restart}
                                tabIndex={0}
                            >
                                <p role="img" aria-label="replay"> ⟲ </p>
                            </div>
                        </SoundControls>
                    )
                }
            </WidthWrapperCenterMedi>

        </LayoutWrapper>
    );
};

export default Meditate;
