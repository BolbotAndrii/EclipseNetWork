import React, {useEffect, useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {Home} from "./components/Home";
import {Provide} from "./components/Provide";
import {Goals} from "./components/Goals";
import {Methods} from "./components/Methods";
import {Сontact} from "./components/Сontact";
import {Modal} from "./components/Modal";
import {Stable} from "./components/Stable";
import {Roadmap} from "./components/Roadmap";
import {Broker} from "./components/Broker";
import {Menu} from "./components/Menu";
import {Header} from "./components/Header";
import './App.css'
import {Perloader} from "./components/Perloader";

const App = () => {
    const anchors = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-1/1', 'slide-1/2', 'slide-1/3'];
    const [width, setWidth] = useState(0);
    const [modal, setModal] = useState(false);
    const [menu, setMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [page, setPage] = useState(null);
    const [type, setType] = useState(null);
    const [loader, setLoader] = useState(true);
    const title = {
        home: "Let's talk business — hop in",
        buyer: "Make leads happen while we do the rest",
        broker: "Get a high-quality traffic"
    }
    const [key, setKey] = useState('')

    function buyersHandler() {
        this.setAllowScrolling(true, 'down, up')
        this.moveSectionDown()
    }

    function brokersHandler() {
        this.setAllowScrolling(true, 'left, right')
        this.setAllowScrolling(false, 'down, up')
        this.moveSlideRight()
    }

    function closeHandler() {
        setModal(!modal)
        setHome(false)
        setKey('')
    }

    function modalBuyerHandler() {
        setModal(!modal)
        setType('buyer')
        setKey('buyer')
    }

    function modalBrokerHandler() {
        setModal(!modal)
        setType('broker')
        setKey('broker')
    }

    function modalHandler() {
        setModal(!modal)
        setHome(!home)
        setKey('home')
    }

    function menuHandler() {
        setMenu(!menu)
    }

    function pageHandler() {
        setPage(this)
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        document.querySelector(':root').style
            .setProperty('--vh', window.innerHeight / 100 + 'px');

        window.addEventListener('resize', () => {
            document.querySelector(':root').style
                .setProperty('--vh', window.innerHeight / 100 + 'px');
        })

        window.addEventListener("load", () => setLoader(false))
    }, [setWidth])

    return (
        <>
            {loader && <Perloader />}

            <Header width={width} menuHandler={menuHandler} />

            <ReactFullpage
                licenseKey={'9E1143DC-8E794374-AEA742C4-6815C8FB'}
                scrollingSpeed={800} /* Options here */
                anchors={anchors}
                loopHorizontal={false}
                css3={true}
                menu={'#myMenu'}
                lazyLoading={true}
                onLeave={(origin, destination, direction) => {
                    if (destination.index === 0) {
                        page.setAllowScrolling(true)
                    }
                    if (direction === 'down') {
                        page.setAllowScrolling(true, 'down, up')
                        page.setAllowScrolling(false, 'left, right')
                    }
                }}
                onSlideLeave={(section, origin, destination, direction) => {
                    if (width > 1024) {
                        const sectionLeave = `[data-menuanchor="${section.anchor}"]`
                        const slideLeave = `[data-menuanchor="slide-1/${origin.index}"]`
                        const slideLoad = `[data-menuanchor="slide-1/${destination.index}"]`

                        if (document.querySelector(slideLeave) !== null) {
                            if (document.querySelector(slideLeave).classList.contains('active')) {
                                document.querySelector(slideLeave).classList.remove('active')
                            }
                        } else {
                            document.querySelector(sectionLeave).classList.remove('active')
                            document.querySelector(slideLoad).classList.add('active')
                        }

                        if (document.querySelector(slideLoad) !== null) {
                            document.querySelector(slideLoad).classList.add('active')
                        }

                        // Blocked scroll down

                        if (destination.index === 0) {
                            page.setAllowScrolling(true)
                        }
                        if (destination.index === 1 || destination.index === 2 || destination.index === 3) {
                            page.setAllowScrolling(false, 'down, up')
                        }
                    } else {
                        if (destination.index === 1 || destination.index === 2 || destination.index === 3) {
                            page.setAllowScrolling(false, 'down, up')
                        }
                        if (destination.index === 0) {
                            page.setAllowScrolling(true)
                        }
                    }
                }}
                render={({state, fullpageApi}) => {

                    return (
                        <ReactFullpage.Wrapper>
                            {/*onLoad={() => fullpageApi.setAllowScrolling(false)}*/}
                            <div className="section" onLoad={pageHandler.bind(fullpageApi)}>
                                <div className="slide">
                                    <Home
                                        width={width}
                                        modalHandler={modalHandler}
                                        moveDown={buyersHandler.bind(fullpageApi)}
                                        moveRight={brokersHandler.bind(fullpageApi)}
                                    />
                                </div>
                                <div className="slide">
                                    <Stable
                                        width={width}
                                        modalHandler={modalBrokerHandler}
                                        type="broker"
                                    />
                                </div>
                                <div className="slide">
                                    <Roadmap width={width} />
                                </div>
                                <div className="slide">
                                    <Broker width={width} />
                                </div>
                            </div>
                            <div className="section">
                                <Provide width={width} />
                            </div>
                            <div className="section">
                                <Goals
                                    modalHandler={modalBuyerHandler}
                                    width={width}
                                    type="buyer"
                                />
                            </div>
                            <div className="section">
                                <Methods width={width} />
                            </div>
                            <div className="section">
                                <Сontact width={width} />
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />

            {modal && <Modal home={home} title={title} type={type} id={key} modalHandler={closeHandler} />}
            {menu && <Menu menuHandler={menuHandler} />}
        </>
    )
};

export default App