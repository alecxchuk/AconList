import React, { Component, createContext } from "react";
import { auth } from "../auth/firebase";
import { generateUserDocument } from '../auth/firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  // state
  state = {
    user: null
  };

  componentDidMount = () => {
    /* listen for changes in the state of the current user
    (when the user logs in and logs out) */
    auth.onAuthStateChanged( async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
      //this.setState({ user: userAuth});
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
