import React, { useState } from 'react';
import { CTAButton, CallToAction } from './CallToAction';
import { LayoutGroup, motion } from 'framer-motion';

export default function Sec7() {
    return (
        <div className=" odd flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold text-cRed">Q&A</h1>
            <QaA
                question="Was ist Social Recruiting und wie kann es meinem Unternehmen helfen?"
                answer="Social Recruiting ist eine Rekrutierungsmethode, die darauf abzielt, qualifizierte Kandidaten durch die Nutzung von sozialen Medien und Online-Netzwerken zu finden. Mit Social Recruiting kannst du eine breitere Zielgruppe erreichen und gezielt nach Kandidaten suchen, die zu deinem Unternehmen passen."
            />
            <QaA
                question="Wie unterscheidet sich Social Recruiting von traditionellen Rekrutierungsmethoden?"
                answer="Social Recruiting konzentriert sich auf die Nutzung von Online-Netzwerken und sozialen Medien, um qualifizierte Kandidaten zu finden, während traditionelle Methoden wie Stellenanzeigen oder Headhunting häufig auf Offline-Kanäle setzen."
            />
            <QaA
                question="Wie lange dauert es in der Regel, qualifizierte Kandidaten durch Social Recruiting zu finden?"
                answer="Die Dauer hängt von vielen Faktoren ab, wie der Größe des Unternehmens und der Anzahl der offenen Stellen. Allerdings kannst du durch gezieltes Social Recruiting und eine gut durchdachte Strategie qualifizierte Kandidaten in der Regel schneller finden als durch traditionelle Methoden."
            />
            <QaA
                question="Wie kann ich sicherstellen, dass die von mir gefundenen Kandidaten wirklich qualifiziert sind?"
                answer="Indem du bestimmte Kriterien festlegst und deine Suche gezielt darauf ausrichtest, kannst du sicherstellen, dass die gefundenen Kandidaten den Anforderungen entsprechen. Außerdem kannst du Vorstellungsgespräche und Einstellungstests durchführen, um sicherzustellen, dass die Kandidaten tatsächlich qualifiziert sind."
            />
            <QaA
                question="Welche Vorteile bietet Midas Media gegenüber anderen Anbietern?"
                answer="Midas Media ist ein erfahrenes Unternehmen im Bereich Social Media Marketing und bietet individuelle Strategien und Lösungen für jedes Unternehmen. Wir bieten auch zusätzliche Dienstleistungen wie Neukundengewinnung und Social Media Management an."
            />
            <QaA
                question="Wie viel kostet mich das?"
                answer="Die Kosten hängen von vielen Faktoren ab, wie der der Anzahl der offenen Stellen und der gewünschten Dauer der Zusammenarbeit. Kontaktieren Sie uns gerne für ein individuelles Angebot."
            />
            <QaA
                question="Kann ich meine Social Recruiting-Strategie selbst umsetzen oder benötige ich Unterstützung von Midas Media?"
                answer="Du kannst deine Social Recruiting-Strategie selbst umsetzen, aber mit der Unterstützung von Midas Media können Sie sicherstellen, dass unsere Strategie optimal auf Ihr Unternehmen zugeschnitten ist und dass Sie schnell und effizient qualifizierte Kandidaten finden."
            />
            <QaA
                question="Wie gehe ich vor, wenn ich mit Midas Media zusammenarbeiten möchte?"
                answer="Kontaktiere uns einfach über unsere Webseite oder per E-Mail und wir vereinbaren gerne ein kostenloses Beratungsgespräch, um deine Bedürfnisse und Ziele zu besprechen."
            />
            <QaA
                question="Was passiert, wenn ich mit dem Service nicht zufrieden bin?"
                answer="Wir arbeiten eng mit unseren Kunden zusammen, um sicherzustellen, dass wir ihre Anforderungen verstehen und ihre Erwartungen übertreffen. Wir sind davon überzeugt, dass unsere Dienstleistung dir dabei helfen wird, den gewünschten Mitarbeiter zu finden. Unsere Strategien und Erfahrung haben bereits vielen Unternehmen geholfen, die besten Talente zu gewinnen. Wir werden Ihnen regelmäßig Updates und Berichte über den Fortschritt des Prozesses liefern, damit du den Erfolg des Services nachvollziehen kannst."
            />

            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="T" />
                <div className="S absolute right-10 h-24 w-2 bg-transparent"></div>
                <div className="U absolute left-10 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}

type QProps = {
    question: string;
    answer: string;
};

function QaA({ question, answer }: QProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const collapseDate = () => {
        setIsExpanded(false);
    };

    const expandDate = () => {
        setIsExpanded(true);
    };

    return (
        <div className="">
            <LayoutGroup>
                {isExpanded ? (
                    <>
                    <ExpandedCard onCollapse={collapseDate} answer={answer}>
                        <h2 className="xl:text-2xl font-bold text-cBlue">
                            {question}
                        </h2>
                    </ExpandedCard>
                    <CompactCard onExpand={expandDate}>
                        <h2 className="xl:text-2xl font-bold text-cBlue">
                            {question}
                        </h2>
                    </CompactCard>
                    </>
                ) : (
                    <CompactCard onExpand={expandDate}>
                        <h2 className="xl:text-xl font-semibold text-white">
                            {question}
                        </h2>
                    </CompactCard>
                )}
            </LayoutGroup>
        </div>
    );
}

function CompactCard({ children, onExpand, disabled }: { children: React.ReactNode; onExpand: () => void; disabled?: boolean }) {
    return (
        <motion.div className="w-[60vw] text-center border-2 border-cBlue xl:rounded-full rounded-lg shadow-md shadow-cBlue xl:p-2 p-4 hover:cursor-pointer hover:shadow-md hover:shadow-cRed hover:scale-105" onClick={disabled ? undefined : onExpand}>
            {children}
        </motion.div>
    );
}

function ExpandedCard({ children, onCollapse, answer }: { children: React.ReactNode; onCollapse: () => void; answer: string }) {
    const handleCollapse = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onCollapse();
        }
    };

    const handleClose = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event from propagating to the outer div
        onCollapse();
    };

    return (
        <div
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
            onClick={handleCollapse}
        >
            <div className="max-h-2/3 relative max-w-2xl overflow-y-auto rounded-lg bg-white p-8">
                <button
                    className="absolute right-2 top-2 text-4xl text-cBlack focus:outline-none"
                    onClick={handleClose}
                >
                    &times;
                </button>
                <motion.div className="text-center">{children}</motion.div>
                <motion.p
                    className="my-4 text-center text-cBlack"
                    transition={{ delay: 0.1 }}
                    initial={{ opacity: 0, top: '6rem' }}
                    animate={{ opacity: 1, top: '3rem' }}
                >
                    {answer}
                </motion.p>
            </div>
        </div>
    );
}
