import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import { LayoutWrapper } from '../../../components/reusablestyles/GlobalStyle';
import {
    WidthWrapperCenterMedi,
    StartCircle,
    RangeBar,
    PointsIndictor,
    SoundControls,
    Modal,
    GreatStart
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
    const [fakeDuration, setFakeDuration] = useState(300);
    const [modalOpen, setModalOpen] = useState(false);
    const [openGreatStart, setOpenGreatStart] = useState(false);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    const doTimeUpdate = () => {
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
            setSongPlaying(false);
            currentTime = 0;
        }

        if (currentPoints === 10 && seconds === 47) {
            setOpenGreatStart(true);
            setTimeout(() => setOpenGreatStart(false), 5000);
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
            song.current.pause(); // not neccesary here but fixed a bug in which when replay is clicked whille song is playing, it add points for the user, which shouldn't be the case
            setSongPlaying(false);
            song.current.currentTime = 0;
            setOpenGreatStart(false);
            setCurrentPoints(0);
        }
    };

    const toggleModal = e => {
        if ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) setModalOpen(!modalOpen);
    };

    const doSetFakeDuration = (e, val) => {
        if ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) {
            setFakeDuration(val);
            song.current.currentTime = 0;
        }
    };

    return (
        <LayoutWrapper>
            <SideNav open={sidebarOpen} />
            <Header toggleSB={toggleSbOnKeypress} title={retrieveCurUser()} />
            {openGreatStart && (
                <GreatStart>
                    <h2>Great Start!</h2>
                    <p className="pointsno">
                        10
                        <br />
                        Points
                    </p>
                    <p>50 Minutes</p>
                    <button type="button" onClick={restart}>
                        <p> Start Over </p>
                    </button>

                    <Link to="/store">
                        <p> Visit Store </p>
                    </Link>
                </GreatStart>
            )}
            {modalOpen && (
                <Modal>
                    <form>
                        <label>
                            <input type="radio" name="timelength" onClick={e => doSetFakeDuration(e, 300)} onKeyPress={e => doSetFakeDuration(e, 300)} />
                            5 Minutes
                        </label>
                        <label>
                            <input type="radio" name="timelength" onClick={e => doSetFakeDuration(e, 900)} onKeyPress={e => doSetFakeDuration(e, 900)} />
                            15 Minutes
                        </label>
                        <label>
                            <input type="radio" name="timelength" onClick={e => doSetFakeDuration(e, 1800)} onKeyPress={e => doSetFakeDuration(e, 1800)} />
                            30 Minutes
                        </label>
                        {/* <button type="submit" name="submit">✔</button> */}
                    </form>
                </Modal>
            )}

            <WidthWrapperCenterMedi onClick={() => setSidebarOpen(false)}>
                {/* eslint-disable-next-line no-nested-ternary */}
                <StartCircle onClick={checkPlaying}><p>{!medTime ? 'Click Here To Start' : modalOpen ? null : medTime}</p></StartCircle>
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
                            <div
                                className="setting"
                                role="button"
                                onClick={toggleModal}
                                onKeyPress={toggleModal}
                                tabIndex={0}
                            >
                                <p role="img" aria-label="setting">
                                    {modalOpen ? '×' : '⚙'}
                                </p>

                            </div>
                        </SoundControls>
                    )
                }
            </WidthWrapperCenterMedi>

        </LayoutWrapper>
    );
};

export default Meditate;
