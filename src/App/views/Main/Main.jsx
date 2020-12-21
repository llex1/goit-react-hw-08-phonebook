import React, { Component, Fragment } from "react";
import action from "./Main.action";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

//jsx module
import Alert from "../../components/Alert";
import AppName from "../../components/AppName";
import ContactAdd from "../../components/ContactAdd";
import ContactShow from "../../components/ContactShow";
import Filter from "../../components/Filter";

//style
import "./Main.css";

class Main extends Component {

  delayToCloseAlert = null;

  componentDidMount() {
      this.props.action_AVE()
  }
  componentDidUpdate() {
  }

  render() {
    return (
        
        <Fragment>
          <CSSTransition
            in={this.props.state.isAlert}
            classNames="alert"
            timeout={250}
            unmountOnExit
          >
            <Alert text={this.props.state.alertMessage} />
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            classNames="AppName"
            timeout={500}
            unmountOnExit
          >
            <AppName />
          </CSSTransition>
          <CSSTransition
            in={!!this.props.state.userId}
            classNames="contactAdd"
            timeout={400}
            unmountOnExit>
            <ContactAdd />
          </CSSTransition>
          <ContactShow>
            <CSSTransition
              in={this.props.state.contacts.length > 1}
              classNames="filter"
              timeout={250}
              unmountOnExit
            >
              <Filter />
            </CSSTransition>
          </ContactShow>
        </Fragment>
      
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
    action_AVE: (contacts) => {dispatch(action.ave(contacts))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
