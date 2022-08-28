import Head from "next/head";
import {Provider} from 'react-redux';
import {store, persistor} from '../global/store';
import {PersistGate} from "redux-persist/integration/react";

import '../styles/globals.scss';

const App = ({Component, pageProps}) => {
    return (
        <div>
            <Head>
                <title>eCommerce</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App;