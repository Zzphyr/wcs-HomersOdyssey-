import React from 'react';
import './App.css';
import SignUp from './SignUp';
// got bellow from https://stackoverflow.com/questions/58432694/cannot-import-material-ui-core-styles-muithemeprovider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";

const theme = createMuiTheme();

// to open the react app, remember to get inside the "front" folder then yarn start!
function App() {
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
                  <SignUp />
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
