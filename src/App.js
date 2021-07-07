import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter} from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UserContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader';
import store from './redux/redux-store';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import { WithSuspense } from './hoc/WithSuspense';



const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount (){
    this.props.initializedApp ();
    console.log(this.props)
  }



  render() {
    if (!this.props.initialized)
      return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        < Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={WithSuspense(DialogsContainer)} />    
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />

        </div>
      </div>
    );

  }
}

let mapStateToProps = (state)=>{
  return{
    initialized: state.app.initialized
  }
}


const AppContainer =
compose(
connect(mapStateToProps, {initializedApp}),
withRouter)
(App);


const MyApp = (props)=>{
  return <BrowserRouter>
  <Provider store = {store}>
  <AppContainer/>
  </Provider>
  </BrowserRouter>
}


export default MyApp