import React from 'react';
import Header from './Header';
import RecordsTable from './RecordsTable';
import AddRecord from './AddRecord';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <RecordsTable/>
        {/* <Records/> */}
        <AddRecord />
      </div>
    );
  }
}


export default App;