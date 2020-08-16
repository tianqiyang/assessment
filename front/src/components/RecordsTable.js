import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import Records from './Records';

class RecordsTable extends React.Component {
    componentDidMount() {
        // this.props.fetchRecords();
        console.log(this.props.currentUserId);
    }

    renderList() {
        return this.props.records.map(record => {
            return (
                <div></div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                        <th className="text-center"> Cost name </th>
                        <th className="text-center"> Supplier </th>
                        <th className="text-center"> Base cost unit </th>
                        <th className="text-center"> Unit price </th>
                        <th className="text-center"> Quantity per 1 bag </th>
                        <th className="text-center"> Cost per 1 Bag of Fancy Chips </th>
                        </tr>
                    </thead>
                    {/* <button
                        onClick={this.handleAddRow}
                        className="btn btn-default pull-left"
                        >
                        Add Row
                    </button> */}
                </table>
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

export default connect(mapStateToProps, {  })(RecordsTable);