import Link from 'next/link';
import React from 'react';
import { CallToAction, CTAButton } from './CallToAction';
import Image from 'next/image';
import stock1 from '~/../public/stock1.jpg';
import logo from '~/../public/Logo.png';
import { motion } from 'framer-motion';

export default function Sec1() {
    return (
        <div className=" first flex flex-col items-center gap-4 pb-4 xl:h-screen">
            {/* TODO: Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Image
                    src={logo}
                    alt="Midas Media Logo"
                    width={150}
                    className=" pt-4"
                />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                animate={{ opacity: 1 }}
                className="w-1/2 text-center text-xl font-bold xl:text-3xl"
            >
                Willst du endlich deinen gewünschten{' '}
                <span className="text-cText">Mitarbeiter </span> finden?
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                animate={{ opacity: 1 }}
                className="my-2 border-t-2 border-dashed border-cRed "
            >
                <h4 className="my-4 px-8 text-center xl:text-xl">
                    Finde noch heute mit{' '}
                    <Link
                        href="https://midasmedia.de/"
                        className="text-cText hover:underline"
                    >
                        Midas Media
                    </Link>{' '}
                    gewünschten Mitarbeiter
                </h4>
                <div className="my-2 border-t-2 border-dashed border-cRed"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                animate={{ opacity: 1 }}
                className="grid justify-items-center gap-4 px-8 xl:grid-cols-2 xl:grid-rows-2"
            >
                <div className="relative overflow-hidden rounded-xl shadow-lg shadow-cBlack ">
                    <Image
                        src={stock1}
                        alt="People Talking"
                        width={450}
                        className=""
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
                </div>

                <div className="relative row-span-2 h-fit rounded-xl  border-2 border-cBlue p-8 xl:w-full ">
                    <div className="absolute inset-0 backdrop-blur-sm backdrop-filter"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div>
                            <p className="text-cText">
                                Für wen ist Social Recruiting geeignet?
                            </p>
                            <br />
                            <span className="text-cText">Achtung: </span>Social
                            Recruiting eignet sich für jede Unternehmensgröße
                            und jeder Branche, die nach neuen Mitarbeitern
                            suchen und ihre Rekrutierungsstrategien verbessern
                            möchten. Es spricht potenzielle Kandidaten an, die
                            nicht aktiv nach einem neuen Job suchen, aber
                            dennoch offen für neue Möglichkeiten sind.
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <CallToAction />
                            <CTAButton lineclass="" />
                        </div>
                    </div>
                </div>
                <div className="2xl:my-auto">
                    <strong>SOCIAL RECRUITING</strong> bedeutet:
                    <ul className="list-disc">
                        <li>Dein Stellenangebot wird maximal sichtbar</li>
                        <li>Du schaffst Wachstum durch Digitalisierung</li>
                        <li>Du wirst zum Platzhirsch deiner Branche</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
