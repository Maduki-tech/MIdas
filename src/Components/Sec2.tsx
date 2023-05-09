import React from 'react';
import Image from 'next/image';
import { CallToAction, CTAButton } from './CallToAction';
import { motion } from 'framer-motion';
import growth from '~/../public/growth.svg';
import saving from '~/../public/saving.svg';
import search from '~/../public/search.svg';

export default function Sec2() {
    return (
        <div className="even flex flex-col items-center gap-20">
            <div className="B flex items-center">
                <div className="C absolute left-8 h-2 w-2 "></div>
                <h1 className="p-1 text-xl xl:text-3xl text-center">
                    Die <span className="text-cText">Vorteile</span> von Social
                    Recruiting sind vielfältig
                </h1>
            </div>
            <div className="xl:w-1/2 px-8 text-center">
                <strong>Social Recruiting</strong> ist eine Dienstleistung, die
                sich auf die Nutzung von sozialen Medien konzentriert, um
                qualifizierte Kandidaten für offene Stellen zu finden. Durch die
                Nutzung von Social Media-Plattformen wie Facebook und Instagram
                können wir von Midas Media potenzielle Kandidaten aufspüren, auf
                dein Unternehmen aufmerksam machen und so auf offene Stellen
                lenken.
            </div>
            <div className="grid xl:grid-cols-3 gap-4 justify-items-center">
                <Kachel
                    icon={growth as HTMLImageElement}
                    title="Erhöhung der Reichweite"
                    text="Social Media erhöht die Reichweite von Unternehmen bei der Suche nach qualifizierten Kandidaten. Es hilft, offene Stellen bekannt zu machen, die sonst möglicherweise unentdeckt geblieben wären."
                />
                <Kachel
                    icon={search as HTMLImageElement}
                    title="Gezielte Suche"
                    text="Nutze Social-Media-Plattformen gezielt, um Kandidaten mit spezifischen Fähigkeiten, Erfahrungen und Qualifikationen zu finden."
                />
                <Kachel
                    icon={saving as HTMLImageElement}
                    title="Reduzierung von Kosten und Zeitaufwand"
                    text="Durch Social Recruiting sparst du Zeit und Geld im Vergleich zu herkömmlichen Methoden wie Zeitungsanzeigen oder Jobportalen."
                />
            </div>

            <h1 className="mt-16 text-center text-xl xl:text-3xl text-cText">
                Bist du bereit, deinen Mitarbeiter einzustellen?
            </h1>

            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="E" />
                <div className="D mt-8 absolute left-8 h-24 w-2 bg-transparent"></div>
                <div className="F mt-8 absolute right-8 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}

type KachelProps = {
    icon: HTMLImageElement;
    title: string;
    text: string;
};

function Kachel({ icon, title, text }: KachelProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-4/5 flex-col items-center gap-4 rounded-xl border-2 border-white bg-cBlack px-4 py-6 text-white shadow shadow-white hover:shadow-lg hover:shadow-white"
        >
            <Image src={icon} alt={title} width={150} className="" />
            {/* <div className="h-12 w-12 bg-cBlue"></div> */}
            <h2 className="text-center text-xl font-bold">{title}</h2>
            <h4 className="my-4 text-center text-lg">{text}</h4>
        </motion.div>
    );
}
