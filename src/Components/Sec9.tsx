import Image from 'next/image';
import React from 'react';
import x from '~/../public/x.png';

export default function Sec9() {
    return (
        <div className=" odd mt-8 flex flex-col items-center gap-8">
            <div className="Y absolute right-10 h-10 w-2 bg-transparent"></div>
            <div className="flex gap-4 items-center">
                <h1 className=" text-center text-3xl font-bold text-cRed">
                    Fazit
                </h1>
                <Image className='Z border-2 border-cRed rounded-full' src={x as HTMLImageElement} alt="Goal" width={43} />
            </div>

            <p className="w-1/2 text-center">
                Unsere Hilfe wird dein Gamechanger sein, um deine Konkurrenz aus
                dem Rennen zu werfen und dich auf einen Markt der
                Konkurrenzlosigkeit zu katapultieren.
            </p>
            <div className="flex flex-col gap-4 text-center">
                <p className="text-xl font-bold text-cRed">
                    Stelle dir eine Frage:
                </p>
                <p className="underline">
                    Will ich meinen neuen Mitarbeiter finden?
                </p>
            </div>
        </div>
    );
}
