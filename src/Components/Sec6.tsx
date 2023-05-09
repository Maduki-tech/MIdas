import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import Image from 'next/image';
import logo from '~/../public/Logo.png';
import { motion } from 'framer-motion';

export default function Sec6() {
    return (
        <div className=" even  flex flex-col items-center gap-20">
            <h2 className="col-span-2 text-center text-xl xl:text-3xl font-bold text-cRed">
                Über Midas Media
            </h2>
            <div className="grid xl:grid-cols-2 gap-8 grid-rows-1 place-items-center">
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1"
                >
                    <Image src={logo} alt="Midas Logo" width={300} />
                </motion.div>
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1"
                >
                    <p className="mx-auto xl:w-3/4 2xl:w-1/2 px-8">
                        Du bist auf der Suche nach einem erfahrenen Partner für
                        Social Media und Online-Marketing? Dann bist du bei{' '}
                        <span className="text-cRed">Midas Media</span> genau
                        richtig! Wir, Daniel Kraus und Michael Heimbuch, haben
                        Midas Media gegründet, um Unternehmen dabei zu helfen,
                        ihre gewünschten Mitarbeiter zu finden, Neukunden zu
                        generieren und bestehende Kunden zu binden - und das
                        alles mit Hilfe von Social Media und Online-Marketing.
                        Wir kennen uns bestens aus mit den unterschiedlichen
                        Algorithmen der Social-Media-Kanäle und bringen deinen
                        Social-Media-Auftritt auf das nächste Level. Wenn du
                        also möchtest, dass deine Social-Media-Präsenz effektiv
                        genutzt wird, um deine Ziele zu erreichen, dann zögere
                        nicht, uns zu kontaktieren. Wir sind hier, um dir zu
                        helfen!
                    </p>
                </motion.div>
            </div>

            <h2 className="col-span-2 text-center text-xl xl:text-3xl font-bold text-cRed">
                Was bedeutet Midas?
            </h2>
            <div className="grid xl:grid-cols-2 grid-rows-1 gap-8 place-items-center">
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1"
                >
                    <p className="mx-auto xl:w-3/4 2xl:w-1/2 px-8">
                        Der Name Midas setzt sich aus den Vornamen der Gründer
                        Michael und Daniel zusammen. Midas ist also die
                        Social-Media-Agentur von Michael und Daniel. Der Name
                        leitet sich auch vom König Midas aus der griechischen
                        Mythologie ab, der alles, was er berührte, in Gold
                        verwandelte. So möchten wir auch alle unsere Aufgaben in
                        Gold verwandeln und einen erstklassigen Service bieten.
                        Wenn du uns beauftragst, kümmern wir uns darum, deinen
                        Auftrag in etwas Besonderes zu verwandeln.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1"
                >
                    <img
                        src={
                            'https://midasmedia.de/wp-content/uploads/2022/06/DSC0784.webp'
                        }
                        alt="Midas Logo"
                        className='rounded-xl'
                        width={400}
                        height={200}
                    />
                </motion.div>
            </div>

            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="Q" />
                <div className=" mt-8 R absolute right-10 h-24 w-2 bg-transparent"></div>
                <div className=" mt-8 P absolute left-10 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}
