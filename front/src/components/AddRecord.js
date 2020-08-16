import React from 'react';
import { connect } from 'react-redux';
import { createRecord } from '../actions';
import RecordForm from './RecordForm';

class AddRecord extends React.Component {
    onSubmit = formValues => {
        this.props.createRecord(formValues);
    }
    
    render() {
        return (
            <div>
                <RecordForm onSubmit={this.onSubmit} />
            </div>
        )
    }
};

export default connect(
    null,
    { createRecord }
)(AddRecord);