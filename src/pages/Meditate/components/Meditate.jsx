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
    const [medTime, setMedTime] = useState('5:0');
    const song = useRef(null);
    const [songPlaying, setSongPlaying] = useState(false);
    const [currentPoints, setCurrentPoints] = useState(0);
    const [fakeDuration, setFakeDuration] = useState(300);
    const [modalOpen, setModalOpen] = useState(false);
    const [openGreatStart, setOpenGreatStart] = useState(false);
    const [musicProgress, setMusicProgress] = useState(null);

    const toggleSbOnKeypress = e => ((e.type === 'keypress' && e.which === 13) || (e.type === 'click')) && setSidebarOpen(!sidebarOpen);

    const doTimeUpdate = () => {
        const { currentTime } = song.current;
        const elapsed = fakeDuration - currentTime;
        const seconds = Math.floor(elapsed % 60);
        const minutes = Math.floor(elapsed / 60);
        setMedTime(`${minutes}:${seconds}`);

        setMusicProgress(((Math.trunc(currentTime)) / fakeDuration).toFixed(2) * 100);

        if (seconds % 10 === 0 && !song.current.paused) {
            const newPoint = currentPoints + 10;
            setTimeout(() => {
                setCurrentPoints(newPoint);
            }, 1000);
        }

        if (currentTime >= fakeDuration) {
            song.current.pause();
            song.current.currentTime = 0;
            setSongPlaying(false);
        }

        if (currentPoints === 10 && seconds === 48) {
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
                    {/* <p>50 Minutes</p>
                    <button type="button" onClick={restart}>
                        <p> Start Over </p>
                    </button> */}

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
                <StartCircle><p>{modalOpen ? null : medTime}</p></StartCircle>
                <audio onTimeUpdate={doTimeUpdate} onPlaying={() => setSongPlaying(true)} ref={song}>
                    <track kind="captions" />
                    <source src={MedSong} />
                </audio>

                <RangeBar musicProgress={musicProgress}>
                    {(musicProgress > 0) && (<div />)}
                </RangeBar>

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
                        {
                            modalOpen ? (<p role="img" aria-label="closetimer"> × </p>) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                    <title>ionicons-v5-g</title>
                                    <path d="M256,48C141.12,48,48,141.12,48,256s93.12,208,208,208,208-93.12,208-208S370.88,48,256,48ZM173.67,162.34l105,71a32.5,32.5,0,0,1-37.25,53.26,33.21,33.21,0,0,1-8-8l-71-105a8.13,8.13,0,0,1,11.32-11
                                .32ZM256,432C159,432,80,353.05,80,256a174.55,174.55,0,0,1,53.87-126.72,14.15,14.15,0,1,1,19.64,20.37A146.53,146.53,0,0,0,108.3,256c0,81.44,66.26,147.7,147.7,147.7S403.7,337.44,403.7,256c0-76.67-58.72-139
                                .88-133.55-147V164a14.15,14.15,0,1,1-28.3,0V94.15A14.15,14.15,0,0,1,256,80C353.05,80,432,159,432,256S353.05,432,256,432Z"
                                    />
                                </svg>
                            )
                        }

                    </div>
                </SoundControls>
            </WidthWrapperCenterMedi>

        </LayoutWrapper>
    );
};

export default Meditate;
