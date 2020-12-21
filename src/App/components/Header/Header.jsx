import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import action from './Header.action';

//router
import router from "../../data/router";

//jsx module
import Loader from "../Loader";

import "./Header.css";

class Header extends Component {
  state = {
  };


  logOut = (event) => {
    if(event.target.textContent === 'Logout'){
      localStorage.clear();
      this.props.action_LOGOUT();
    };
  }



  render() {

    //!  ____ВИПРАВИТИ ЦІ КОСТИЛІ ____

    let loginLogout = 'Login';
    let registration = 'Registration';
    if(this.props.state.userId) {
      loginLogout = "Logout"
      registration = ''
    }

    //!  ______________________________

    return (
      <header className="header">
        <div className="header-container">
          <Link to={router.main}>
            <span>{this.props.state.userName}</span>
          </Link>
          <div className="login-block">
            <Link to={router.registration} className="registration-link">
              {registration}
            </Link>
            <Link to={router.login} onClick={this.logOut}>{loginLogout}</Link>
          </div>
        </div>
        <CSSTransition
          in={this.props.state.loader}
          timeout={250}
          classNames="loader"
          unmountOnExit
        >
          <Loader />
        </CSSTransition>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action_LOGOUT: (value) => {
      dispatch(action.logOut(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
