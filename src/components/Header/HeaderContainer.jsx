
import { connect } from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import React from 'react';
import Header from './Header';




class HeaderContainer extends React.PureComponent {

      render() {

            return (
                  <Header {...this.props} />
            );
      }

}

let mapStateToProps = (state) => {
      return {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
      }
}


export default connect (mapStateToProps, {logout})(HeaderContainer);