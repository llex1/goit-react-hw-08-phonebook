import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import action from './Registration.action';
import URI from '../../data/URI';

import "./Registration.css";

class Registration extends Component {
  state = {
    newUserName: "",
    newUserPass: "",
    // messageFromServer: "",  //! ____ДЛЯ ДОДАТКОВОГО ОПОВІЩЕННЯ КОРОСТУВАЧА____
  };

  handleChange = (event) => {
    if (event.target.name === "newUserName") {
      this.setState((state) => {
        return {
          newUserName: event.target.value,
        };
      });
    }
    if (event.target.name === "newUserPass") {
      this.setState((state) => {
        return {
          newUserPass: event.target.value,
        };
      });
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.action_LOADER(true);
    const newUser = {
      name: this.state.newUserName,
      pass: this.state.newUserPass,
      marker: 'newuser'
    }

    const respons = await fetch(`${URI.server}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const responsJson = await respons.json()
    localStorage.setItem('sessionControl', responsJson.sessionControl);
    this.props.action_LOGIN({
      userName: responsJson.userName,
      userId: responsJson.userId,
    })

    console.log(responsJson);

  
    
    
    
    this.props.action_LOADER(false);
    this.setState((state) => {
      return {
        newUserName: "",
        newUserPass: ""
      };
    });
    this.props.history.push({
      pathname: '/',
    });
  };
  
  
  render() {
    return (
      <Fragment>
        <CSSTransition
            in={true}
            appear={true}
            classNames="AppName"
            timeout={500}
            unmountOnExit
          >
          <p className="registrationTitle">
            Hi, let's add your info in our base:
          </p>
        </CSSTransition>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="newUserName" className="label">
            Your nickname:
          </label>
          <input
            type="text"
            name="newUserName"
            id="newUserName"
            autoComplete="off"
            className="input"
            onChange={this.handleChange}
            value={this.state.newUserName}
          />
          <label htmlFor="newUserName" className="label">
            Your password:
          </label>
          <input
            type="password"
            name="newUserPass"
            id="newUserPass"
            autoComplete="off"
            className="input"
            onChange={this.handleChange}
            value={this.state.newUserPass}
          />
          <button className="btn" type="submit">
            ок
          </button>
        </form>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    action_LOADER: (boolean) => {
      dispatch(action.loader(boolean))
    },
    action_LOGIN: (obj) => {
      dispatch(action.logIn(obj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
