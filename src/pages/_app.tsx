import { type AppType } from 'next/dist/shared/lib/utils';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';

import '~/styles/globals.css';
const montserrat = Montserrat({ subsets: ['latin'] });

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <div className={montserrat.className}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-2BQ316HYBQ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2BQ316HYBQ');
          gtag('set', 'send_to', 'G-2BQ316HYBQ');
          gtag('event', 'page_view');
        `}
            </Script>

            <Script src="//embed.typeform.com/next/embed.js"></Script>

            <Script id="hotjar">
                {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3481433,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
