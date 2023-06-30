import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavbarMobile() {
    useEffect(() => {
        const navMobileLinks = document.getElementById('navMobile');
        const openIcon = "https://ik.imagekit.io/yrdximse9a/creativebradley/menu.png?updatedAt=1680007608439";
        const closeIcon = "https://ik.imagekit.io/yrdximse9a/creativebradley/cancel.png?updatedAt=1680007608465";
        const [icon, setIcon] = useState(openIcon);
    }, []);

    const toggleIcon = () => {
        if (icon === openIcon)
        {
            setIcon(closeIcon);
            navMobileLinks.classList.toggle("showMobileNav");
            console.log(navMobileLinks)
        }
        else if (icon === closeIcon)
        {
            setIcon(openIcon);
            navMobileLinks.classList.toggle("showMobileNav");
            console.log(navMobileLinks)
        }
    }

    return (
        <nav id='navbarMobile'>
            <div className='navMobileHeader'>
                <Image
                    src="https://ik.imagekit.io/yrdximse9a/creativebradley/logo_transparent_green.png?updatedAt=1678942615318"
                    alt="Creative Bradley Logo"
                    width={948}
                    height={326}
                    className="logoImage"
                />
                <Image
                    src={icon}
                    alt="Creative Bradley Logo"
                    width={50}
                    height={50}
                    onClick={toggleIcon}
                    className="iconImage"
                />
            </div>
            <div className='navMobileLinks' id='navMobile'>
                <ul>
                    <li onClick={toggleIcon}>
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={toggleIcon}>
                        <Link href="/">Services</Link>
                    </li>
                    <li onClick={toggleIcon}>
                        <Link href="/">Portfolio</Link>
                    </li>
                    <li onClick={toggleIcon}>
                        <Link href="/">About me</Link>
                    </li>
                    <li>
                        <button className='creamBtn' onClick={toggleIcon}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
