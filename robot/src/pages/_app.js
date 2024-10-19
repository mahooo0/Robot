// pages/_app.js
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Ensure you import 'store' correctly
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </RecoilRoot>
    );
}
