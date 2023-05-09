const GA_MEASUREMENT_ID = 'G-2BQ316HYBQ'; // Replace with your GA4 Measurement ID

declare global {
    interface Window {
        gtag: (event: string, action: string, params: any) => void;
    }
}

export const pageview = (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({ action, params }: { action: string; params: any }) => {
    window.gtag('event', action, params);
};
