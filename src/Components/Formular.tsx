import React, { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from '@formspree/react';

declare global {
    interface Window {
        gtag: (event: string, action: string, params: any) => void;
    }
}

const FormComponent = () => {
    const [state, handleSubmit] = useForm('xpzebvjv');

    const formRef = useRef<HTMLFormElement>(null);

    // TODO: Clear input and show message DONE
    if (state.succeeded) {
        formRef.current?.reset();
        toast.success('Vielen Dank für Ihre Anfrage!');
    }

    return (
        <div id='form' className='even'>
            <h1 className=" text-xl font-bold xl:text-3xl mt-8 text-center">
                Vereinbare <span className="text-cText">jetzt</span> ein Termin
            </h1>
            <div className=" mx-auto my-10 max-w-xl rounded bg-cBlack p-8 text-white shadow-lg">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="mb-6">
                        <label className="mb-2 block text-xl">
                            1. Bist du...?
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="geschäftsführer"
                                name="position"
                                value="geschäftsführer"
                            />
                            <label htmlFor="geschäftsführer" className="ml-2">
                                Geschäftsführer
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="mitarbeiter"
                                name="position"
                                value="mitarbeiter"
                            />
                            <label htmlFor="mitarbeiter" className="ml-2">
                                Mitarbeiter
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-xl">
                            2. Ist die Einstellung eines Mitarbeiters länger als
                            3 Monate her?
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="einstellung_ja"
                                name="einstellung"
                                value="ja"
                            />
                            <label htmlFor="einstellung_ja" className="ml-2">
                                Ja
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="einstellung_nein"
                                name="einstellung"
                                value="nein"
                            />
                            <label htmlFor="einstellung_nein" className="ml-2">
                                Nein
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-xl">
                            3. Werden Deine Mitarbeiter durch Weiterbildungen
                            gefördert?
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="weiterbildung_ja"
                                name="weiterbildung"
                                value="ja"
                            />
                            <label htmlFor="weiterbildung_ja" className="ml-2">
                                Ja
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="weiterbildung_nein"
                                name="weiterbildung"
                                value="nein"
                            />
                            <label
                                htmlFor="weiterbildung_nein"
                                className="ml-2"
                            >
                                Nein
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-xl">
                            4. Hast du bereits herkömmliche Wege zur
                            Mitarbeitergewinnung ausprobiert? (z.B. Zeitungen
                            oder Jobportale)
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="herkömmliche_ja"
                                name="herkömmliche"
                                value="ja"
                            />
                            <label htmlFor="herkömmliche_ja" className="ml-2">
                                Ja
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="herkömmliche_nein"
                                name="herkömmliche"
                                value="nein"
                            />
                            <label htmlFor="herkömmliche_nein" className="ml-2">
                                Nein
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-xl">
                            5. Bist du offen für die Digitalisierung?
                        </label>
                        <div>
                            <input
                                type="radio"
                                id="digitalisierung_ja"
                                name="digitalisierung"
                                value="ja"
                            />
                            <label
                                htmlFor="digitalisierung_ja"
                                className="ml-2"
                            >
                                Ja
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="digitalisierung_nein"
                                name="digitalisierung"
                                value="nein"
                            />
                            <label
                                htmlFor="digitalisierung_nein"
                                className="ml-2"
                            >
                                Nein
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="mb-2 block text-xl">
                            Vor- und Nachname
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded border border-gray-300 p-2 text-cBlack"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="mb-2 block text-xl">
                            Geschäftliche E-Mail Adresse
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded border border-gray-300 p-2 text-cBlack"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="phone" className="mb-2 block text-xl">
                            Telefonnummer
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full rounded border border-gray-300 p-2 text-cBlack"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full rounded bg-gradient-to-r from-cRed to-cBlue text-lg py-3 xl:text-xl text-white"
                    >
                        Unverbindliches Beratungsgespräch (Jetzt Anfordern)
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default FormComponent;
