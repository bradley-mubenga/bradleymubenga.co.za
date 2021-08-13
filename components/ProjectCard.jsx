import React from 'react';

//Next.js & React.js Components
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({project, title, thumbNail}) {
    return (
        <div className="card">
            <Image src={`https://server-my-portfolio.herokuapp.com${thumbNail}`} className="card-img-top" height="2000" width="3000"/>

            <div className="card-body text-center">
                <Link href={'/'}>
                    <a className="pText">{title}</a>
                </Link>
            </div>
        </div>
    )
}
