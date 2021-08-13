import React, { useState, useEffect } from 'react';

//React & Next.js Components
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

//Hero Section
export function HeroSection() {
    //State that sets the mouse pinter animation on and off.
    const [ pointerAnimation, setPointerAnimation ] = useState(true);

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
                        <Link href="#aboutSection">
                            <a>
                                <Image src="/images/down-arrow.png" height="77" width="77" className={ pointerAnimation ? ('animate__animated animate__slideInDown animate__slow-3s animate__infinite') : ('imageLink') } onMouseOver={() => setPointerAnimation(false)} onMouseLeave={() => setPointerAnimation(true)}/>
                            </a>
                        </Link>
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
                            <Image src="/icons/linked-in-icon.png" height="57" width="57" className={isGitHover ? ('animate__animated animate__bounce imageLink') : ('')} onMouseOver={() => setGitHover(true)} onMouseLeave={() => setGitHover(false)}/>
                        </Link>
                        
                        <span className="px-2"></span>

                        <Link href="https://github.com/bradley-mubenga">
                            <Image src="/icons/github-icon.png" height="57" width="57" className={isLinkedInHover ? ('animate__animated animate__bounce imageLink') : ('')} onMouseOver={() => setLinkedInHover(true)} onMouseLeave={() => setLinkedInHover(false)}/>
                        </Link>
                    </div>
                </div>
            </div>

            {
                isResponsive ? <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id="aboutImage"><Image src="/images/bradley-mubenga-about-me-mobile.jpg" height="1000" width="1500"/></div> : (``)
            }
        </section>
    )
}


//Recent Projects Section
export function RecentProjects() {
    //
    const [ projectData, setProjectData ] = useState([]);

    //
    useEffect(() => {
        fetch('https://server-my-portfolio.herokuapp.com/articles')
        .then(res => res.json())
        .then(data => setProjectData(data))
    }, []);


    return (
        <section id="projectsSection" className="fpChildElement py-5">
            <div className="container d-flex align-items-center justify-content-center">
                <div>
                    <div className="text-center">
                        <h1 className="largeH1">Recent Projects</h1>
                    </div> 

                    {/* Load Data From Strapi Blog API Then Render Projects*/}
                    <div className="d-flex gap-3 flex-wrap justify-content-center row pt-4">
                        { projectData ? (projectData.map((project, key) => {
                            return <div key={key} className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center">
                                <ProjectCard project={project} title={project.title} thumbNail={project.imageOne.formats.thumbnail.url}/>
                            </div>
                        })) : (<h1>Loading</h1>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

//Contact Form Section
export function ContactForm() {
    //State To Check If Mouse If Hovering And The Execute Animations
    const [ isLinkedInHover, setLinkedInHover ] = useState(false);
        
    return (
        <section id="contactForm" className="fpChildElement py-5">
            <div className="container d-flex align-items-center justify-content-center">
                <div>
                    <div className="text-center">
                        <h1 className="largeH1">Contact</h1>
                    </div>

                    <div className="pt-4">
                        <div className="pb-5">
                            <form className="d-flex justify-content-center flex-column gap-3">
                                <p className="pText">Name</p>
                                <input type="text" placeholder="Your name.." className="formInput"/>

                                <p className="pText">Subject</p>
                                <input type="text" placeholder="How can I help you?." className="formInput"/>

                                <p className="pText">Message (Optional)</p>
                                <textarea placeholder="Write something.."  className="formInput"></textarea>

                                <div>
                                    <button className="submitButton pText">Submit</button>
                                </div>
                            </form>
                        </div>

                        <Link href="/">
                            <a className="pText pt-5"><Image src="/icons/email-icon.png" height="35" width="35" className={isLinkedInHover ? ('animate__animated animate__bounce imageLink') : ('')} onMouseOver={() => setLinkedInHover(true)} onMouseLeave={() => setLinkedInHover(false)}/> <span className="px-1"></span>mubengabradley@gmail.com</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


