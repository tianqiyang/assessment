import React from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions';

class RecordsTable extends React.Component {
    componentDidMount() {
        this.props.fetchRecords();
    }

    renderList() {
        return this.props.records
            .filter(e => e.userId === this.props.currentUserId)
            .map(record => {
                return (
                    <tr className="item" key={record.id}>
                        <td>{record.costName}</td>
                        <td>{record.supplier}</td>
                        <td>{record.bostUnit}</td>
                        <td>{record.unitPrice}</td>
                        <td>{record.quantity}</td>
                        <td>{record.unitPrice * record.quantity}</td>
                    </tr>
                );
            });
    }

    renderTotal() {
        const temp = this.props.records
            .filter(e => e.userId === this.props.currentUserId)
            .map(record => record.unitPrice * record.quantity);
        return (
            <tr>
                <td colSpan="5">Total</td>
                <th className="left aligned">
                    {temp.length > 0 ? temp.reduce((a, b) => a + b, 0) : 0}
                </th>
            </tr>)

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
                    <tbody>
                        {this.renderList()}
                        {this.renderTotal()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        currentUserId: state.auth.userId,
        records: Object.values(state.records),
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchRecords })(RecordsTable);