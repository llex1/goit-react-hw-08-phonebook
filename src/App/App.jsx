import React, { Component, Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import { CSSTransition } from "react-transition-group";

//views
import Main from './views/Main';
import Registration from './views/Registration';
import Login from './views/Login';

//jsx components
import Header from './components/Header';

//router
import router from './data/router';

//style
import "./App.css";

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <div className='container'>
        <Switch>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Route path={router.main} exact component={Main}/>
            <Route path={router.registration} exact component={Registration}/> 
            <Route path={router.login} exact component={Login}/> 
          </Suspense>
        </Switch>
        </div>
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
    // action_AVE: (contacts) => {dispatch(action.ave(contacts))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
