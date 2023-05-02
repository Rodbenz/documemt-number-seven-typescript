import '@/styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { skipPage } from '@/libs/skipPage'
import HaederNavbar from './components/navbar';
import { CartProvider } from '@/context/Cartcontext';
import { Provider } from 'react-redux'
import store from '@/store'
import CheckLogin from './login/checklogin';
import  ConfirmDialog2  from './components/@conponents/popup/ComfirmDialog';
import SnackBarDiaLog from './components/@conponents/popup/SnackbarSet';

export default function App({ Component, pageProps }: AppProps) {
  const [isMenu, setIsMenu] = React.useState(false);
  const router = useRouter()
  return (
    <Provider store={store}>
      <div>
        <CartProvider>
          <CheckLogin />
          <ConfirmDialog2/>
          <SnackBarDiaLog />
          <div style={{
            backgroundImage: "url(/image/building-2.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center',
            height: '100vh', width: '100%'
          }} >
            <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
              {skipPage.includes(router.route) ? null : <HaederNavbar setIsMenu={setIsMenu} />}
              <Component {...pageProps} />
            </div>
          </div>
        </CartProvider>
      </div>
    </Provider>
  )
}
