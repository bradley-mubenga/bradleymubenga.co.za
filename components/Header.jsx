import React, { useState, useEffect } from 'react';

//Next.js & Reat.js Components
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [ isMobile, setMobile ] = useState(false);

    useEffect(() => {
        if (window.screen.width < 768) {
            setMobile(true)
        }

        else {
            setMobile(false)
        }
    },[])

    return (
        <header className={ isMobile ? "fixed-top container-fluid px-4" : "fixed-top container"} id="header">
            <nav className="py-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a className="navbar-brand pText logoText"><Image className="img-fluid" src={'/icons/bradley-mubenga-emblem.png'} height={isMobile ? "30" : "55"} width={isMobile ? "30" : "60"} /></a>
                        </Link>
                    </div>
                    
                    <div>
                        <Link href="/">
                            <a><Image alt="" src={'/icons/hamburger-menu.png'} height={isMobile ? "35" : "69"} width={isMobile ? "35" : "69"}/></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
