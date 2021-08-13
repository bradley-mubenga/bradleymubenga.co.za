import React from 'react';

//Next.js & React.js Components
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ param, title, hostName, thumbNail }) {
    return (
        <div className="card">
            <Image src={`${hostName}${thumbNail}`} className="card-img-top" height="720" width="1280"/>

            <div className="card-body text-center">
                <Link href={`${window.location.origin}/projects/${param}`} replace>
                    <a className="pText">{title}</a>
                </Link>
            </div>
        </div>
    )
}
