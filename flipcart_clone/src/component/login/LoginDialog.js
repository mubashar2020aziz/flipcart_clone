import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from '@mui/material';

const Component = styled(Box)`
  height: 70vh;
  width: 100vh;
`;
const Image = styled(Box)`
  background: #2874fa
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 79.3%;
  width: 38%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 15px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #f8641b;
  color: #fff;
  font-weight: 600;
  height: 38px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874fa;
  font-weight: 600;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: gray;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  cursor: pointer;
  font-weight: 600;
`;
const accountinitialvalues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations',
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: 'Sign up with your mobile number to get started',
  },
};
const Error = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  line-height: 0;
  font-weight: 600;
  margin-top: 10px;
`;

const signinitialvalues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  number: '',
};
const logininitialvalue = {
  email: '',
  password: '',
};

const LoginDialog = ({ open, setOpen }) => {
  // const history = useNavigate();
  const [account, setToggleAccount] = useState(accountinitialvalues.login);
  const [signUp, setSignUp] = useState(signinitialvalues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(logininitialvalue);
  const [error, setError] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setToggleAccount(accountinitialvalues.login);
    setError(false);
  };

  const toggleSignup = () => {
    setToggleAccount(accountinitialvalues.signup);
  };

  // Signup
  let name, value;

  const InputChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };
  const SignContinue = async (e) => {
    e.preventDefault();
    const { firstname, lastname, username, email, password, number } = signUp;
    const res = await fetch('/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        email,
        password,
        number,
      }),
    });
    const data = await res.json();
    if (!data) return;
    handleClose();
    setAccount(signUp.firstname);
  };
  //signup end

  // login start

  const onValueChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };
  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    const res = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.status === 200) {
      handleClose();
      setAccount(res.data);
    } else {
      setError(true);
    }

    console.log(data);
  };

  //login end

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset' } }}
    >
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: '20px' }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email"
                value={login.email}
                name="email"
                onChange={onValueChange}
              />
              {error && <Error>Plz Enter valid Email and password</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                value={login.password}
                name="password"
                onChange={onValueChange}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={LoginUser}>Login</LoginButton>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter FirstName"
                name="firstname"
                value={signUp.firstname}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <TextField
                variant="standard"
                label="Enter LastName"
                name="lastname"
                value={signUp.lastname}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <TextField
                variant="standard"
                label="Enter UserName"
                name="username"
                value={signUp.username}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                value={signUp.email}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                value={signUp.password}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <TextField
                variant="standard"
                label="Enter Number"
                name="number"
                value={signUp.number}
                style={{ marginBottom: '-7px' }}
                onChange={InputChange}
                autoComplete="off"
              />
              <LoginButton onClick={SignContinue}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
