import React, { Component, PropTypes } from 'react';
import { dicts } from 'datas';
import './Table.scss';


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.setType = this.setType.bind(this);
        this.state = {
            type: 'ALL'
        }
    }

    static get propTypes() {
        return {
            data: PropTypes.object.isRequired
        }
    }

    get items() {
        return this.props.data.items;
    }

    get fields() {
        return this.props.data.fields;
    }

    setType(e) {
        this.setState({
            type: e.target.value
        });
    }
    
    getLabel(field, item) {
        const key = field.key;
        const fieldId = item[key];
        if(field.useId) {
            return dicts.entities[key][fieldId].label
        }
        
        return item[key];
    }

    render() {
        const filtered = this.items.filter( e => {
            
            if(this.state.type === 'ALL') {
                return true;
            }

            return Number(this.state.type) === e.type;

        });

        return (
            <div>
                <select value={this.state.type} onChange={this.setType}>
                    <option value="ALL">ALL</option>
                    { dicts.result.type.map( e => <option value={e} key={e}>{dicts.entities.type[e].label}</option> ) }
                </select>

                <table className="table">
                    <thead>
                    <tr>
                        { this.fields.map( (e, i) => <th key={i}>{e.label}</th> ) }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filtered.map( (item, i) =>
                            <tr key={i}>
                                { this.fields.map( (field, i2) => <td key={i2}>{this.getLabel(field, item)}</td> ) }
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}