import Link from 'next/link';
import React from 'react';

type CallToActionProps = {
    lineclass: string;
};
export function CallToAction() {
    return (
        <div className="flex flex-col items-center px-8 text-center mb-8 xl:mb-0">
            <div>
                Buche <span className="text-cText">Dein</span> Kostenloses
                Beratungsgespräch
            </div>
        </div>
    );
}

export const CTAButton = ({ lineclass }: CallToActionProps) => {
    return (
        <div className="relative inline-block w-fit mt-8">
            <div className="pulse absolute inset-0 rounded-full bg-gradient-to-r from-cRed to-cBlue"></div>
            <button
                className={`relative w-fit rounded-full px-5 py-3 bg-gradient-to-r from-cRed to-cBlue text-xl text-white ${lineclass} z-10`}
            >
                <Link href="#form" scroll={false}>Jetzt Buchen</Link>
            </button>
        </div>
    );
};
