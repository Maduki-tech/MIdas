import Image from 'next/image';
import React from 'react';
import sale from '~/../public/sale.jpg';
import { CTAButton, CallToAction } from './CallToAction';

export default function Sec8() {
    return (
        <div className=" even flex flex-col items-center gap-20">
            <h1 className=" text-center text-xl font-bold text-cRed xl:text-3xl">
                Limitiertes Angebot
            </h1>
            <div className="grid place-items-center xl:grid-cols-2">
                <p className="px-8 text-center  xl:w-3/4 xl:text-left">
                    Wir haben eine aufregende Neuigkeit für dich! Wir haben ein
                    limitiertes Angebot, das nur für kurze Zeit verfügbar ist.
                    Aber zuerst möchten wir betonen, dass wir nicht mit jedem
                    Unternehmen zusammenarbeiten. Wir wählen unsere Kunden
                    sorgfältig aus, um sicherzustellen, dass wir dich
                    bestmöglichst unterstützen können und eine erfolgreiche
                    Zusammenarbeit gewährleisten. Wenn du zu den Unternehmen
                    gehörst, die wir ausgewählt haben, haben wir ein
                    unglaubliches Angebot für dich. Wir werden eng mit dir
                    zusammenarbeiten, um dein Unternehmen auf das nächste Level
                    zu bringen und deinen Wunschmitarbeiter für dich finden. Wir
                    werden dir dabei helfen, dein Branding zu verbessern, deine
                    Zielgruppe zu erreichen und deine Online-Präsenz zu
                    optimieren. Aber sei schnell! Unser limitiertes Angebot ist
                    nur für kurze Zeit verfügbar und die Plätze füllen sich
                    schnell. Wenn du interessiert bist, kontaktiere uns noch
                    heute, um mehr darüber zu erfahren. Wir freuen uns darauf,
                    von dir zu hören und dich bei deinem Geschäftserfolg zu
                    unterstützen!
                </p>

                <div className="hidden h-fit/2 w-1/2 xl:block rounded-lg shadow shadow-cBlack overflow-hidden">
                    {' '}
                    <Image src={sale} alt="sale gif" width={400} />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="W" />
                <div className="X absolute right-10 mt-8 h-24 w-2 bg-transparent"></div>
                <div className="V absolute left-10 mt-8 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}
