import Link from 'next/link';
import Image from 'next/image';

import Twitter from '../public/icons/twitter.svg';
import Github from '../public/icons/github.svg';
import Linkedin from '../public/icons/linkedin.svg';

import { Mukta } from 'next/font/google';

const mukta = Mukta({
    weight: '400',
    subsets: ['latin-ext'],
})

// Navigation component of the app
export default function Navigation() {
    return (
        <nav className="top-0 left-0 flex justify-between items-center p-6 m-auto my-0 border-b-2 border-black
                        w-[75%] text-primary max-h-[80px]">

            <Link href="/" className={mukta.className}>
                <h1 className=' text-4xl'>Sarthak Malla</h1>
            </Link>
            <div className="flex items-center justify-between space-x-10">
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
            <div className='flex items-center justify-between space-x-4'>
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