import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarDesktop() {
    return (
        <nav id='navbarDesktop'>
            <div>
                <Image
                    src="https://ik.imagekit.io/yrdximse9a/creativebradley/logo_transparent_green.png?updatedAt=1678942615318"
                    alt="Creative Bradley Logo"
                    width={948}
                    height={326}
                />
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Services</Link>
                    </li>
                    <li>
                        <Link href="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/">About me</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className='creamBtn'>Contact</button>
            </div>
        </nav>
    )
}
