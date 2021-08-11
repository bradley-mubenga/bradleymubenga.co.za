import React, { useState, useEffect } from 'react';

//React & Next.js Components
import Image from 'next/image';
import Link from 'next/link';

//Hero Section
export function HeroSection() {
    return (
        <section id="heroSection" className="fpChildElement d-flex align-items-center">
            <div className="container d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <div className="text-center">
                        <h1 className="largeH1">Developer.</h1>
                        <h1 className="largeH1">Leader.</h1>
                        <h1 className="largeH1">Human.</h1>
                    </div>

                    <div className="text-center justify-content-end pt-5">
                        <Image src="/images/down-arrow.png" height="77" width="77"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

//About Section
export function AboutSection() {
    //Effect And State To Check If DOM Is Mobile And Do Responsive Tasks Accordingly.
    const [ isResponsive, setResponsive ] = useState(false);

    useEffect(() => {
        if (window.screen.width < 992) {
            setResponsive(true)
        }

        else {
            setResponsive(false)
        }
    });

    //State To Check If Mouse If Hovering And The Execute Animations
    const [ isGitHover, setGitHover ] = useState(false);
    const [ isLinkedInHover, setLinkedInHover ] = useState(false);

    return (
        <section id="aboutSection" className="row">
            {
                isResponsive ? (``) : <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id="aboutImage"> <Image src="/images/bradley-mubenga-about-me.jpg" height="3360" width="3360"/></div>
            }

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center py-5">
                <div className="container-fluid">
                    <h1 className="largeH1">Hey There!</h1>
                    <p className="pText">Bradley is a full-stack developer who loves coffee, mayonnaise and using technology to solve problems. I am very passionate about creating web applications that improve the lives of human beings.</p>

                    <div className="pt-4">
                        <Link href="https://linkedin.com/in/bradley-mubenga">
                            <Image src="/icons/linked-in-icon.png" height="45" width="45" className={isGitHover ? ('animate__animated animate__bounce imageLink') : ('')} onMouseOver={() => setGitHover(true)} onMouseLeave={() => setGitHover(false)}/>
                        </Link>
                        
                        <span className="px-2"></span>

                        <Link href="https://github.com/bradley-mubenga">
                            <Image src="/icons/github-icon.png" height="45" width="45" className={isLinkedInHover ? ('animate__animated animate__bounce imageLink') : ('')} onMouseOver={() => setLinkedInHover(true)} onMouseLeave={() => setLinkedInHover(false)}/>
                        </Link>
                    </div>
                </div>
            </div>

            {
                isResponsive ? <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id="aboutImage"> <Image src="/images/bradley-mubenga-about-me-mobile.jpg" height="1000" width="1500"/></div> : (``)
            }
        </section>
    )
}
