import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import RecordsTable from './RecordsTable';
import AddRecord from './AddRecord';

class View extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Header />
                <RecordsTable />
                <AddRecord />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    userId: state.auth.userId
});

export default connect(
    mapStateToProps,
    null
)(View);

