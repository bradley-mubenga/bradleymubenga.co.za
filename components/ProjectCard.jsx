import React from 'react';

//Next.js & React.js Components
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard() {
    return (
        <div className="card">
            <Image src={'/images/space.jpeg'} className="card-img-top" height="2000" width="3000"/>

            <div className="card-body text-center">
                <Link href={'/'}>
                    <a className="pText">Indlela Media</a>
                </Link>
            </div>
        </div>
    )
}
