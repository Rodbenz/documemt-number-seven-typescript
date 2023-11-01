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
import BoxFooters from './components/footers';
import { ThemeProvider, createTheme } from '@mui/material';
import { UPD_REPORT_SEND, UPD_REPORT_SEND_PROV } from '@/service/upd';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  const [isMenu, setIsMenu] = React.useState(false);
  const router: any = useRouter()

  React.useEffect(() => {
    console.log(router.query.token);
  }, [router])

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Kanit",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTable: {
        defaultProps: {
          size: "small",
        },
      },
    },
  });

  const updateSendExport = async () => {
    try {
      let updsendall = await UPD_REPORT_SEND()
      let updsendprov = await UPD_REPORT_SEND_PROV()
    } catch (e) {

    }
  }

  // React.useEffect(() => {
  //   updateSendExport()
  // }, [])

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>ระบบเชื่อมโยงแลกเปลี่ยนข้อมูล</title>
          </Head>
          <div>
            <CartProvider>
              {/* <CheckLogin /> */}
              <ConfirmDialog2 />
              <SnackBarDiaLog />
              <LoadingScreen />
              <div style={{
                backgroundImage: `url(${process.env.REACT_APP_API_IMAGES}/image/building-2.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center',
                height: '93vh', width: '100%', overflowY: 'hidden', overflowX: 'hidden'
              }} >
                <div className={router.route == '/' ? "" : styles.box}>
                  {skipPage.includes(router.route) ? null : <HaederNavbar setIsMenu={setIsMenu} />}
                  <div style={{ width: '100%', height: '75vh', overflowY: 'auto', overflowX: 'hidden' }}>
                    <Component {...pageProps} />
                  </div>
                </div>
              </div>
              <BoxFooters />
            </CartProvider>
          </div>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  )
}
