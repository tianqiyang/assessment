import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RecordForm extends React.Component {
    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ({ label, input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{ label }</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        
    }
    
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"
            >
                <Field 
                    name="costName" 
                    component={this.renderInput} 
                    label="Enter cost Name"
                />
                <Field 
                    name="supplier" 
                    component={this.renderInput} 
                    label="Enter supplier"
                />
                <Field 
                    name="bostUnit" 
                    component={this.renderInput} 
                    label="Enter bostUnit"
                />
                <Field 
                    name="unitPrice" 
                    component={this.renderInput} 
                    label="Enter unitPrice"
                />
                <Field 
                    name="quantity" 
                    component={this.renderInput} 
                    label="Enter quantity"
                />
                <button className="ui button primary">Add</button>
            </form>
        )
    }
};

const validate = (formValues) => {
    const errors = {};
    
    if (!formValues.unitPrice || Number(formValues.unitPrice) !== parseFloat(formValues.unitPrice)) {
        errors.unitPrice = 'You must enter a unitPrice';
    }
    
    if (!formValues.quantity || Number(formValues.quantity) !== parseFloat(formValues.quantity)) {
        errors.quantity = 'You must enter a quantity';
    }
    
    return errors;
};

export default reduxForm({
    form: 'recordForm',
    validate
})(RecordForm);
