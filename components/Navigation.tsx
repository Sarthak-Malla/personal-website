import Link from 'next/link';
import Image from 'next/image';

import Twitter from '../public/icons/twitter.svg';
import Github from '../public/icons/github.svg';
import Linkedin from '../public/icons/linkedin.svg';

// Navigation component of the app
export default function Navigation() {
    return (
        <nav className="flex justify-between items-center w-full p-6 pl-32 pr-32 mx-auto my-0 border-b border-300">

            <Link href="/">
                <h1 className=' text-3xl'>Sarthak Malla</h1>
            </Link>
            <div className="flex items-center justify-between w-1/3">
                <Link href="/about">
                    About
                </Link>
                <Link href="/projects">
                    Projects
                </Link>
                <Link href="/blog">
                    Blog
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
            <div className='flex items-center justify-between w-1/12 space-x-4'>
                <Link href="https://github.com/Sarthak-Malla" target='_blank'>
                    <Image src={Github} alt="github" unoptimized className="w-6 h-6"/>
                </Link>
                <Link href="https://www.linkedin.com/in/sarthak-pd-malla/" target='_blank'>
                    <Image src={Linkedin} alt="linkedin" unoptimized className="w-6 h-6"/>
                </Link>
                <Link href="twitter.com" target='_blank'>
                    <Image src={Twitter} alt="twitter" unoptimized className="w-6 h-6"/>
                </Link>
            </div>
        </nav>
    );
}