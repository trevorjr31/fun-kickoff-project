import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import BecomeASitter from './pages/Dashboard/becomeASitter/BecomeASitter';
import Messages from './pages/Dashboard/messages/messages';
import MySitters from './pages/Dashboard/mySitters/MySitters';
import Profile from './pages/Dashboard/profile/Profile';
import MyJobs from './pages/Dashboard/myJobs/MyJobs';
import { CssBaseline } from '@material-ui/core';

import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <CssBaseline />
              <NavBar />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route component={BecomeASitter} exact path="/become-a-sitter" />
                <Route component={MySitters} exact path="/my-sitters" />
                <Route component={MyJobs} exact path="/my-jobs" />
                <Route component={Messages} exact path="/messages" />
                <Route component={Profile} exact path="/profile" />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
