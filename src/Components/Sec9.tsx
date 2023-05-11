import Image from 'next/image';
import React from 'react';
import x from '~/../public/x.png';
import Fazit from '~/../public/fazit.jpg';

export default function Sec9() {
    return (
        <div className=" odd  flex flex-col items-center gap-8">
            <div className="Y absolute right-10 h-12 w-2 bg-transparent"></div>
            <div className="flex items-center gap-4">
                <h1 className=" text-center text-5xl font-bold text-cRed">
                    Fazit
                </h1>
                <Image
                    className="Z rounded-full border-2 border-cRed"
                    src={x as HTMLImageElement}
                    alt="Goal"
                    width={43}
                />
            </div>

            <p className="w-1/2 text-center text-lg">
                Unsere Hilfe wird dein Gamechanger sein, um deine Konkurrenz aus
                dem Rennen zu werfen und dich auf einen Markt der
                Konkurrenzlosigkeit zu katapultieren.
            </p>
            <div className="flex flex-col gap-4 text-center">
                <p className="text-3xl font-bold text-cRed">
                    Stelle dir eine Frage:
                </p>
                <p className="underline text-xl">
                    Will ich meinen neuen Mitarbeiter finden?
                </p>
            </div>
            <div className="relative overflow-hidden rounded-lg">
                <Image src={Fazit} alt="Fazit" width={500} />
                <h1 className='absolute bottom-8 right-10 text-xl text-center font-serif text-cText'>Suche es dir jetzt aus!</h1>
            </div>
        </div>
    );
}
