import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import Records from './Records';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return (
      <div className="ui container">
        <Header />
        {/* <Records/> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { 
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, {  })(App);