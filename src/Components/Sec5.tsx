import { motion } from 'framer-motion';
import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import save from '~/../public/save.svg';
import work from '~/../public/work.svg';
import bit from '~/../public/bit.svg';
import Image from 'next/image';

export default function Sec5() {
    return (
        <div className=" odd mt-8 flex flex-col items-center gap-20">
            <h1 className=" text-xl xl:text-3xl text-center text-cText">
                Deshalb kommst du um Social Recruiting nicht herum!
            </h1>
            <Kachel
                image={bit as HTMLImageElement}
                title="Unsere Welt wird immer digitaler"
                text="Durch ein Gespräch mit unseren Marketing-Experten erkennst du, dass nur deine aktuellen Gedanken dich davon abhalten, endlich sichtbar zu werden. Wir helfen dir dabei, diese Denkfehler zu eliminieren, um Bewerbungen wie am Fließband zu erhalten."
            />
            <Kachel
                image={save as HTMLImageElement}
                title="TOT sicheres Ding"
                text="Durch die gezielte Nutzung von sozialen Medien können Unternehmen eine größere Zielgruppe erreichen und gezielt nach Kandidaten suchen, die bestimmte Fähigkeiten und Erfahrungen mitbringen."
            />
            <Kachel
                image={work as HTMLImageElement}
                title="Einblicke in unsere Arbeit"
                text="Wir bieten eine individuelle und maßgeschneiderte Dienstleistung für jedes Unternehmen an. Ein Fotograf kommt in dein Unternehmen und erstellt hochwertige Fotos von dir und deinen Mitarbeitern, die von unserem Webdesigner in ein ansprechendes Werbevideo umgesetzt wird. Unser Marketingexperte erstellt dann eine Kampagne, um dein Stellenangebot auf Plattformen wie Facebook und Instagram zu bewerben."
            />

            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="N" />
                <div className="M absolute right-10 h-24 w-2 bg-transparent"></div>
                <div className="O absolute left-10 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}

type KachelProps = {
    image: HTMLImageElement;
    title: string;
    text: string;
};

function Kachel({ image, title, text }: KachelProps) {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className="flex px-8 xl:w-1/3 flex-col items-center gap-4"
        >
            <div className="m-4 h-44 w-44 ">
                <Image src={image} alt="Logo" />
            </div>
            <h1 className="text-2xl text-center font-bold text-cText">{title}</h1>
            <p className="text-center">{text}</p>
        </motion.div>
    );
}
