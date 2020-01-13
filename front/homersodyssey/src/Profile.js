import React, {Component} from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";

class Profile extends Component {
   constructor(props) {
      super(props);
      this.state  = {
         profile: {
            email:  "homer.simpson@wildcodeschool.fr",
            name:  "Homer",
            lastname:  "Simpson"
         }
      }
   }
  

   render() {
      const { email, name, lastname } = this.state.profile;
      return(
         <> 
            <h2>Profile page - remove this h2 later</h2>
            <List>
               <ListItem>
                  <ListItemText primary="Email" secondary={email}/>
                  <ListItemText primary="Name" secondary={name}/>
                  <ListItemText primary="Lastname" secondary={lastname}/>
               </ListItem>
            </List>
            <Link to="/signin">
               <button>Logout</button>
            </Link>
         </>
      );
   }
}

export default Profile;