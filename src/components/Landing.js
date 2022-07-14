import Almarena from 'assets/images/Almarena.jpg'
import Diamante from 'assets/images/Diamante.jpg'
import Esmeralda_Grand from 'assets/images/Esmeralda_Grand.jpg'
import Paraiso from 'assets/images/Paraiso.jpg'
import Fonuder from 'assets/images/clouthier.jpg'
import ArrowRight from 'assets/images/arrow-right-circle.svg'
import { withPrefix } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import AppendHead from 'react-append-head'
import ProductItem from './ProductItem'
import Preloader from './Preloader'
import Button from 'components/Utils/Button'
import Navbar from './Navbar/Navbar'

function Landing() {

    const projectsRef = useRef(null);
    const aboutUsRef = useRef(null);
    const financingRef = useRef(null);

    const scrollToRef = (ref) => {
        if(ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    const [itemsLeft] = useState([
        {
            src: Diamante,
            title: 'Punta Diamante',
            subTitle: 'Altata, Sinaloa, México',
            url: 'https://www.impulsainmuebles.com.mx/desarrollos/punta-diamante-42',
        },
        {
            src: Almarena,
            title: 'Almarena Residencial',
            subTitle: 'Mazatlán, Sinaloa, México',
            url: 'https://www.impulsainmuebles.com.mx/desarrollos/almarena-61',
        },
    ])
    const [itemsRight] = useState([
        {
            src: Paraiso,
            title: 'Punta Paraíso',
            subTitle: 'Altata, Sinaloa, México',
            url: 'https://www.impulsainmuebles.com.mx/desarrollos/punta-paraiso-9',
        },
        {
            src: Esmeralda_Grand,
            title: 'Punta Esmeralda Grand',
            subTitle: 'Altata, Sinaloa, México',
            url: 'https://www.impulsainmuebles.com.mx/desarrollos/punta-esmeralda-grand-169',
        },
    ])

    useEffect(() => {
        window.addEventListener('beforeunload', onRefresh)
        return () => {
            window.removeEventListener('beforeunload', onRefresh)
        }
    }, [])

    const onRefresh = () => {
        window.scroll(0, 0)
    }

    const showPage = () => {
        const els = document.querySelectorAll('.work_card')
        els.forEach(function (ele) {
            ele.style.visibility = 'visible'
        })
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="page-wrapper">
            <AppendHead onLoad={() => showPage()}>
                <script
                    src={withPrefix('/jquery.js')}
                    type="text/javascript"
                    order="0"
                ></script>
                <script
                    src={withPrefix('/animation.js')}
                    type="text/javascript"
                    order="1"
                ></script>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
            </AppendHead>
            <main className="main-wrapper">
                <div className="trigger-wrapper">
                    <div className="trigger"></div>
                </div>
                <section className="hero-section">
                    <div className="container is-hero">
                        <svg
                            className="logo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 42.8 50.1"
                            fill="currentColor"
                        >
                            <defs></defs>
                            <path
                                className="a"
                                d="M30.7,13.2,18.3,21.3a.7.7,0,0,1-1.1-.5V.7A.7.7,0,0,0,16.1.1L.3,10.2a.7.7,0,0,0-.3.6v21a.7.7,0,0,0,1.1.6l11.7-7.5a.8.8,0,0,1,.8.1l11.7,8.5a.5.5,0,0,1,.3.5V49.4a.7.7,0,0,0,1.1.6L42.5,39.9a.6.6,0,0,0,.3-.6V22a.8.8,0,0,0-.2-.5L31.5,13.3A.8.8,0,0,0,30.7,13.2Z"
                            />
                        </svg>
                        <h1 className="hero_heading">
                            Hello!{' '}
                            <span className="secondary-color">Let's make</span>
                            <br />
                            <span className="secondary-color">your</span>
                            <span className="primary-color"> Dream</span>
                            <span> Vacation</span>
                            <br />
                            <br />
                            <span className="tertiary-color">We are</span>
                            <span className="primary-color"> Impulsa</span>
                        </h1>
                    </div>
                </section>

                <div className="sticky-wrapper">
                    <div className="work-section">
                        <div className="container" ref={projectsRef}>
                            <Navbar
                                onHomeClick={(e) => scrollTop()}
                                onProjectsClick={(e) => scrollToRef(projectsRef)}
                                onFinancingClick={(e) => scrollToRef(financingRef)}
                                onAboutClick={(e) => scrollToRef(aboutUsRef)}
                            />
                            <h4 className="work_header section_header_text">our projects</h4>
                            <h4 className="work_header section_header">
                             
                            </h4>
                            <div className="work_wrap">
                                <div className="work_left">
                                    {itemsLeft?.map(
                                        ({ src, title, subTitle, url }) => (
                                            <ProductItem
                                                src={src}
                                                title={title}
                                                subTitle={subTitle}
                                                url={url}
                                                key={title}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="work_right">
                                    {itemsRight?.map(
                                        ({ src, title, subTitle, url }) => (
                                            <ProductItem
                                                src={src}
                                                title={title}
                                                subTitle={subTitle}
                                                url={url}
                                                key={title}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky_spacer"></div>
                </div>
                <div className="container" ref={aboutUsRef}>
                    <h4 className="section_header_text">who we are</h4>
                    <h4 className="section_header"></h4>
                    <div className="section_inner">
                        <h6 className="section_title">
                            The best Real Estate &mdash;
                        </h6>
                        <h6 className="section_title">company in Mexico.</h6>
                        <p className="section_text">
                            A company founded in 1990 by the Clouthier Carrillo
                            family. We owe our success to our efficiency in the
                            critical aspects of real estate: Quality and the
                            best locations.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="section_header_text">What we do</h4>
                    <h4 className="section_header"></h4>
                    <div className="section_inner">
                        <p className="section_text">
                            Since the year 1990, Impulsa has built more than
                            10,000 homes and condominiums in more than 50
                            projects with a market value of 500 million dollars.
                        </p>
                        <p className="section_text">
                            Impulsa’s commitment to excellence has made it the
                            preeminent developer of quality real estate in the
                            State of Sinaloa.
                        </p>
                        <Button
                            className="section_button"
                            variant="outlined"
                            href="https://www.impulsarealestate.com/about/"
                            target="_blank"
                        >
                            Learn More
                        </Button>
                    </div>
                    <div className="section_founder">
                        <h2 className="founder_name founder_name_left">
                            Manuel
                        </h2>
                        <img
                            src={Fonuder}
                            loading="lazy"
                            alt="Manuel Clouthier"
                            className="founder_image"
                        />
                        <h2 className="founder_name founder_name_right">
                            Clouthier
                        </h2>
                    </div>
                </div>
                <div className="container" ref={financingRef}>
                    <h4 className="section_header_text">PAYMENT OPTIONS</h4>
                    <h4 className="section_header"></h4>
                    <div className="section_inner">
                        <p className="section_text">
                        There are a couple of different ways to go about buying property in Mexico.
                        One way is to buy through a development company like Impulsa. Another is through
                        a mortgage company such as MexLend, Mexquest, Laredo National Bank, etc.
                        <br/><br/>Impulsa offers several different financing and payment options on its developments,
                        and they are some of the most flexible in the Mexican Real Estate market.
                        </p>
                    </div>
                </div>
                <div className="container">
                <h4 className="section_header_text">FIDEICOMISOS</h4>
                    <h4 className="section_header"></h4>
                    <div className="section_inner">
                        <p className="section_text">
                        When it comes to conducting business in Mexico, the Fideicomiso 
                        (pronounced fee-day-coe-mee-so) is one of the key legal arrangements you will
                        need to understand. A Fideicomiso is a type of trust that is required for foreigners
                        to buy property in certain parts of Mexico.
                        <br/><br/>A fideicomiso is a contract between a settlor —who delegates certain assets
                        owned by him— and the trustee who manages those assets in favor of a third person who
                        is called the beneficiary.
                        <br/><br/>In simple terms it refers to someone who grants his property rights to
                        someone else to manage them for a certain time in a preestablished way.
                        </p>
                    </div>
                </div>
                <div className="container">
                   <h4 className="section_header_text">get in touch</h4>
                    <h4 className="section_header"></h4>
                    <div className="section_inner">
                        <h2 className="get_touch_title">
                            Ready to make real your
                        </h2>
                        <h2 className="get_touch_title2">Dream vacation?</h2>
                        <div className="link_container">
                            <a
                                href="#"
                                onClick={(e) => scrollToRef(aboutUsRef)}
                                className="link_item"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={ArrowRight}
                                    className="arrow_icon"
                                    alt="arrow icon"
                                ></img>
                                <h5 className="get_touch_link">About</h5>
                            </a>
                            <a
                                href="#"
                                onClick={(e) => scrollToRef(projectsRef)}
                                className="link_item"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={ArrowRight}
                                    className="arrow_icon"
                                    alt="arrow icon"
                                ></img>
                                <h5 className="get_touch_link">Projects</h5>
                            </a>
                            <a
                                href="http://wa.link/19h4qz"
                                className="link_item"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={ArrowRight}
                                    className="arrow_icon"
                                    alt="arrow icon"
                                ></img>
                                <h5 className="get_touch_link">Contact</h5>
                            </a>
                            <a
                                href="https://www.instagram.com/impulsa_inmuebles/"
                                className="link_item"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={ArrowRight}
                                    className="arrow_icon"
                                    alt="arrow icon"
                                ></img>
                                <h5 className="get_touch_link">Follow Us</h5>
                            </a>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Landing
