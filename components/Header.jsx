import React from 'react';

//Next.js & Reat.js Components
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header class="fixed-top container" id="header">
            <nav class="py-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="#">
                            <a className="navbar-brand pText logoText"><Image className="img-fluid" src={'/icons/bradley-mubenga-emblem.png'} height="55" width="55" /></a>
                        </Link>
                    </div>
                    
                    <div>
                        <Link href="/">
                            <a><Image src={'/icons/hamburger-menu.png'} height="69" width="69" /></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
