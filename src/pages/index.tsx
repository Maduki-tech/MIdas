import { type NextPage } from 'next';
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

const Home: NextPage = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="">
            <motion.path
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ pathLength: scrollYProgress }}
            />
            <Head>
                <title>Midas Media</title>
                <meta name="description" content="Midas Media Description" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="">
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
                {typeof window !== 'undefined' && window.innerWidth > 1024 && (
                    <HandleLine />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
