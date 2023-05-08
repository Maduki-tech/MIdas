import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className='grid xl:grid-cols-3 place-items-center gap-4 py-8 px-8 border-t'>
            <span className='font-thin text-center'>Copyright © 2023 Midas Media. Alle Rechte reserviert. </span>
            <span>
                <Link className='hover:text-cRed' href={'https://midasmedia.de/impressum/'}>Impressum</Link>{' '}
                |{' '}
                <Link className='hover:text-cRed' href={'https://midasmedia.de/datenschutz/'}>
                    Datenschutz
                </Link>
            </span>
            <span className='font-thin text-center'>
                This site is not a part of the Facebook TM website or Facebook
                TM Inc. Additionally, this site is NOT endorsed by FacebookTM in
                any way. FACEBOOK TM is a trademark of FACEBOOK TM, Inc.
            </span>
        </div>
    );
}
