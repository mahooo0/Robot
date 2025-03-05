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
import GETRequest from '@/services/QueryREq';
import Head from 'next/head';
import { axiosInstance } from '@/services/Requests';

export default function App({ Component, pageProps }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 5 * 60 * 1000,
                staleTime: 60 * 1000,
            },
        },
    });
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fawIcon, setFawIcon] = useState('');

    useEffect(() => {
        const fetchFavicon = async () => {
            try {
                const response = await axiosInstance.get('/favicon');
                setFawIcon(response.data.image);
            } catch (error) {
                console.error('Error fetching favicon:', error);
            }
        };

        fetchFavicon();
    }, []);

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
                    <Head>
                        <link rel="icon" href={fawIcon || ''} />
                    </Head>
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
