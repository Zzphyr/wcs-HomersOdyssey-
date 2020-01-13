import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
// got bellow from https://stackoverflow.com/questions/58432694/cannot-import-material-ui-core-styles-muithemeprovider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const theme = createMuiTheme();

// to open the react app, remember to get inside the "front" folder then yarn start!
function App() {
  // to allow redirect and logout
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  //const handleLogin = () => {};

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid 
          container
          alignItems='center'
          style={{ height: '100%' }}
          >
          <Grid 
            item xs={12}
            >
            <Paper
              elevation={4}
              style={{ margin: 32 }}
              >
              <Grid 
                container
                alignItems='center'
                justify='center'
                style={{ textAlign: 'center' }}>          
                <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer eating donut" />
                <Grid  
                  item xs={12} sm={6}
                >
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/">
                        <SignIn />
                      </Route>
                      <Route path="/signin">
                        <SignIn />
                      </Route>
                      <Route path="/signin">
                        <SignIn />
                      </Route>
                      <Route path="/signup">
                        <SignUp />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
