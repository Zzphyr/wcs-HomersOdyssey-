import React, {Component} from 'react';
import { Button, Snackbar, TextField } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      flash: "",
      isSnackOpen: false,
    }
  }

  updateEmailField = (event) => {
    this.setState({email: event.target.value});
  }  
  updatePasswordField = (event) => {
    this.setState({password: event.target.value});
  }  
  
   handleSubmit = (e) => {
      e.preventDefault();
   /*     console.log("A name was submitted: ", this.state);
      // remember to yarn start both backend and frontend!
      fetch("/auth/signin",
      {
         method: 'POST',
         headers: new Headers({
         'Content-Type': 'application/json'
         }),
         body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
         res => this.setState({"flash": res.flash}),
         err => this.setState({"flash": err.flash})
      ).then(<Redirect to="/" />) */
      this.props.history.push('/profile');
   }

  handleSnackOpen = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSnackOpen: true
    }))
  }

  handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      isSnackOpen: false
    }))
  };
  

  render() {
    const { flash, isSnackOpen } = this.state;
    //console.log(this.state)
    return(
      <> 
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <h2>SignIn page - remove this h2 later</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField label="Email" type="email" name="email" onChange={this.updateEmailField} />
          <TextField label="Password" type="password" name="password" onChange={this.updatePasswordField} />
          <Button 
            type="submit"
            variant="contained" 
            color="primary"
            onClick={this.handleSnackOpen}
            >Submit
          </Button>
        </form>
        <Link to="/signup">Signup</Link>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={isSnackOpen}
          autoHideDuration={4000}
          onClose={this.handleSnackClose}
          message={flash}
        />
      </>
    );
  }
}

export default withRouter(SignIn);