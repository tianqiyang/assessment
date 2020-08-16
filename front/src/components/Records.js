import React from 'react';

class Records extends React.Component {
    state = {
        rows: []
    };

    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };

    handleCost = idx => e => {
        const { name, value } = e.target;
        if (value != NaN) {
            const rows = [...this.state.rows];
            // .unitPrice * this.state.rows[idx].quantity
            console.log(value.unitPrice);
            rows[idx] = {
                [name]: value
            };
            this.setState({
                rows
            });
        }
    };

    handleAddRow = () => {
        const item = {
            costName: "",
            supplier: "",
            bostUnit: "",
            unitPrice: 0,
            quantity: 0,
            cost: 0
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
        };
        handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    render() {
        return (
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
                {this.state.rows.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                            <td>
                            <input
                                type="text"
                                name="costName"
                                value={this.state.rows[idx].costName}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="supplier"
                                value={this.state.rows[idx].supplier}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="bostUnit"
                                value={this.state.rows[idx].bostUnit}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                            />
                            </td>
                            <td>
                            <input
                                type="number"
                                name="unitPrice"
                                value={this.state.rows[idx].unitPrice}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                            />
                            </td>
                            <td>
                            <input
                                type="number"
                                name="quantity"
                                value={this.state.rows[idx].quantity}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                            />
                            </td>
                            <td>
                            <input
                                type="number"
                                name="cost"
                                value={this.state.rows[idx].unitPrice}
                                onChange={this.handleCost(idx)}
                                className="form-control"
                            />
                            </td>
                        </tr>
                        ))}
                </tbody>
                <button
                    onClick={this.handleAddRow}
                    className="btn btn-default pull-left"
                    >
                    Add Row
                </button>
            </table>
        )
    }
}
export default Records;