import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';


import useFormInput from '../hooks/useFormInput';
import { UserContext } from '../../context/UserContext';



function Copyright(props) {
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

export default function Login() {

    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')
    const { username, setUsername } = React.useContext(UserContext)

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = usernameProps.value
        let password = passwordProps.value

        console.log(user + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (user && password && user === password)

        if (!isLoggedIn) {
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrMsg('Maximum login attempts exceeded. You are blocked.');
            }
            else {
                setErrMsg('Unsuccessful login attempt #' + newAttempts + ' of 5');
            }
            setLoginAttempts(newAttempts)
        } else {
            setErrMsg('')
            setUsername(user)
        }

        setLoggedIn(isLoggedIn)
    };

    return (
        <div className="Login componentBox">
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {loggedIn ? 'Hello '+username : 'Please log in to MiniProject 2'}
                    </Typography>

                    {!loggedIn && loginAttempts < 5 &&

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                {...usernameProps}
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
                                {...passwordProps}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <p>{errMsg}</p>
                            <Grid container>
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
                            </Grid>
                        </Box>
                    }
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
        </div>
    );
}