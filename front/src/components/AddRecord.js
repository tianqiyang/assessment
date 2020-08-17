import React from 'react';
import { connect } from 'react-redux';
import { createRecord } from '../actions';
import RecordForm from './RecordForm';

class AddRecord extends React.Component {
    onSubmit = formValues => {
        if (this.props.userId !== null) {
            this.props.createRecord(formValues);
        }
    }
    
    render() {
        return (
            <div>
                <RecordForm onSubmit={this.onSubmit} />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    userId: state.auth.userId
});

export default connect(
    mapStateToProps,
    { createRecord }
)(AddRecord);