import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {    
    return (
        <header>
            <div>
                <Image 
                    src="https://ik.imagekit.io/yrdximse9a/creativebradley/logo_transparent_green.png?updatedAt=1678942615318"
                    alt="Creative Bradley Logo"
                    width={118.5}
                    height={40}
                    className="responsiveLogo"
                />
                <h1>X</h1>
            </div>
            <div className='navLinks'>
                <ul>
                    <li>
                        <Link href="/home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-me">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='navLinks'>
                <button>Contact</button>
            </div>
        </header>
    )
}
