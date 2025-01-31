// pages/_app.js
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Ensure you import 'store' correctly
import { RecoilRoot } from 'recoil';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Provider store={store}>
                    <NextNProgress
                        color="#69BE56"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                        showOnShallow={true}
                    />
                    <Component {...pageProps} />
                    <Toaster />
                </Provider>
            </RecoilRoot>
            {/* ReactQueryDevtools must be inside QueryClientProvider */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
