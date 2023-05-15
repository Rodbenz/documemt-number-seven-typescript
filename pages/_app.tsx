import '@/styles/globals.css'
import React from 'react';
import styles from '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { skipPage } from '@/libs/skipPage'
import HaederNavbar from './components/navbar';
import { CartProvider } from '@/context/Cartcontext';
import { Provider } from 'react-redux'
import store from '@/store'
import CheckLogin from './login/checklogin';
import ConfirmDialog2 from './components/@conponents/popup/ComfirmDialog';
import SnackBarDiaLog from './components/@conponents/popup/SnackbarSet';
import LoadingScreen from './components/@conponents/loadingscreen';

export default function App({ Component, pageProps }: AppProps) {
  const [isMenu, setIsMenu] = React.useState(false);
  const router = useRouter()
  console.log(router.route);

  return (
    <Provider store={store}>
      <div>
        <CartProvider>
          {/* <CheckLogin /> */}
          <ConfirmDialog2 />
          <SnackBarDiaLog />
          <LoadingScreen />
          <div style={{
            backgroundImage: "url(/image/building-2.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center',
            height: '100vh', width: '100%', overflowY: 'hidden', overflowX: 'hidden'
          }} >
            <div className={router.route == '/' ? "" : styles.box}>
              {skipPage.includes(router.route) ? null : <HaederNavbar setIsMenu={setIsMenu} />}
              <div style={{ width: '100%', height: '85vh', overflowY: 'auto', overflowX: 'hidden' }}>
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </CartProvider>
      </div>
    </Provider>
  )
}
