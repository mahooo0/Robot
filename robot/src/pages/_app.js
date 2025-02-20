// pages/_app.js
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { RecoilRoot } from 'recoil';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
    const queryClient = new QueryClient();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Provider store={store}>
                    {/* Page Load Progress Bar */}
                    <NextNProgress
                        color="#69BE56"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                        showOnShallow={true}
                    />

                    {/* Full-Screen Loader */}
                    {loading && (
                        <div className="loading-overlay">
                            <div className="spinner"></div>
                        </div>
                    )}

                    <Component {...pageProps} />
                    <Toaster />
                </Provider>
            </RecoilRoot>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
