import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { _createToken, setCookie } from '@/libs/dataControl';
import { useCartContext } from '@/context/Cartcontext';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setValue } from '@/store/feature/userid';
import {TextField, Typography, Link, Grid, CssBaseline, Button, Box, Avatar, Paper  } from '@mui/material'


interface ILogin {
  skiproute?: string[]
}

function Copyright(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide( props: ILogin) {
  const router = useRouter()
  const disPacth = useDispatch()

  const isVaild = (el: any) => {
    console.log(el)
    if (el.user == '' || el.password == '') {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return false
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataUser = {
      user: data.get('user'),
      password: data.get('password'),
      // exp: 60 * 60 * 24 * 7
    }
    console.log(dataUser);
    let checkData = isVaild(dataUser)
    if (checkData == false) {
      return false
    }
    let tokenData = _createToken(dataUser)
    console.log(tokenData, 'tokenData');
    setCookie("userdata", tokenData, 7);
    // setUser(dataUser)
    disPacth(setValue(data.get('user')));

    router.push('/')
    // window.location.href = '/'
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: `url(${process.env.REACT_APP_API_IMAGES}/image/building-2.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              เข้าสูใช้งานระบบ
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="Username"
                name="user"
                autoComplete="user"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                เข้าระบบ
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              <Copyright  />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}