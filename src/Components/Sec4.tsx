import React from 'react';
import { CTAButton, CallToAction } from './CallToAction';

export default function Sec4() {
    return (
        <div className=" even mt-8 flex flex-col items-center gap-20">
            <h2 className="w-2/3 text-center text-xl xl:text-3xl font-bold">
                <span className="text-cText">Booste dein Unternehmen:</span>{' '}
                Kostenlos Beratungsgespräch für dein{' '}
                <span className="text-cText">Personalproblem</span>
            </h2>

            <div className="grid xl:grid-cols-2 place-items-center">
                <div className="xl:w-1/2 px-8">
                    Entdecke jetzt, wie wir mit unserer Strategie dein
                    Unternehmen auf das nächste Level bringen können. Melde dich
                    noch heute für ein kostenloses Beratungsgespräch an und
                    lasse uns gemeinsam dein Personalproblem besprechen. Fülle
                    dazu einfach unser kurzes Formular aus und wir werden uns
                    innerhalb von 24 Stunden mit dir in Verbindung setzen.
                </div>

                <div className="hidden xl:block h-full w-1/2 bg-cBlue"></div>
            </div>

            <div className="flex flex-col items-center">
                <CallToAction />
                <CTAButton lineclass="K" />
                <div className="mt-8 L absolute left-10 h-24 w-2 bg-transparent"></div>
                <div className="mt-8 J absolute right-8 h-24 w-2 bg-transparent"></div>
            </div>
        </div>
    );
}
