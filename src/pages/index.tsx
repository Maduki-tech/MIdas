import { type NextPage } from 'next';
import logo from '~/../public/Logo.png';
import { motion, useScroll } from 'framer-motion';
import Head from 'next/head';
import Sec2 from '~/Components/Sec2';
import Sec3 from '~/Components/Sec3';
import Sec4 from '~/Components/Sec4';
import Sec5 from '~/Components/Sec5';
import Sec6 from '~/Components/Sec6';
import Sec7 from '~/Components/Sec7';
import Sec8 from '~/Components/Sec8';
import Sec9 from '~/Components/Sec9';
import HandleLine from '~/Components/handleLine';
import Sec1 from '~/Components/sec1';
import Formular from '~/Components/Formular';
import Footer from '~/Components/Footer';
import { useEffect, useState } from 'react';
import { CTAButton } from '~/Components/CallToAction';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
    const { scrollYProgress } = useScroll();
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 150;
            if (show !== isScrolled) setScrolled(show);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isScrolled]);

    return (
        <div className="">
            <Head>
                <title>Midas Media</title>
                <meta name="description" content="Midas Media Description" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="relative">
                <nav className={`fixed w-full ${isScrolled? 'top-0 z-50 flex justify-evenly items-center bg-cBlack/90 pb-4' : 'hidden'}`}>
                    <div>
                    <Link
                        href="https://midasmedia.de/">
                        <Image
                            src={logo}
                            alt="Midas Media Logo"
                            width={80}
                            className=" pt-4"
                        />
                    </Link>
                    </div>
                    <div className='text-xl' >Willst du endlich deinen gewünschten <span className='text-cText'>Mitarbeiter</span> finden?</div>
                    <div>
                        <CTAButton lineclass="" />
                    </div>
                </nav>
                <Sec1 />
                <Sec2 />
                <Sec3 />
                <Sec4 />
                <Sec5 />
                <Sec6 />
                <Sec7 />
                <Sec8 />
                <Sec9 />
                <Formular />
            </main>
            <Footer />
            <ConditionalHandleLine />
        </div>
    );
};

// Render the HandleLine component only on the client-side, based on the window size.
function ConditionalHandleLine() {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setShouldRender(true);
    }, []);

    if (
        typeof window === 'undefined' ||
        !shouldRender ||
        window.innerWidth <= 1024
    ) {
        return null;
    }

    return <HandleLine />;
}

export default Home;
