import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import { motion } from 'framer-motion';
import awo from '~/../public/awo.png';
import hauck from '~/../public/hauck-logo.png';
import mba from '~/../public/mba-logo-copy.png';
import nontel from '~/../public/nontel.png';
import pappi from '~/../public/pappi.png';
import scherer from '~/../public/scherer.png';
import Image from 'next/image';

export default function Sec3() {
    return (
        <div className="odd flex flex-col items-center gap-20">
            <h1 className=" text-center text-xl font-bold xl:text-3xl">
                Kunden die uns <span className="text-cText">vertrauen : </span>
            </h1>

            <div className="grid grid-cols-2 gap-x-12 xl:grid-cols-6">
                <Kachel image={awo as HTMLImageElement} delay={0.2} />
                <Kachel image={hauck as HTMLImageElement} delay={0.3} />
                <Kachel image={mba as HTMLImageElement} delay={0.4} />
                <Kachel image={nontel as HTMLImageElement} delay={0.5} />
                <Kachel image={pappi as HTMLImageElement} delay={0.6} />
                <Kachel image={scherer as HTMLImageElement} delay={0.7} />
            </div>
            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="G" />
                <div className="mt-8 H absolute right-10 h-24 w-2 bg-transparent"></div>
                <div className="mt-8 I absolute left-10 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}

type KachelProps = { image: HTMLImageElement; delay: number };

function Kachel({ image, delay }: KachelProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: delay,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            className="flex h-24 w-24 items-center justify-center xl:h-44 xl:w-44"
        >
            <Image src={image} alt="Logo" />
        </motion.div>
    );
}
