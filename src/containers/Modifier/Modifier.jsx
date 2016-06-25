import React, { Component } from 'react';
import { Table } from 'components';
import { table_03 } from 'datas';


export default class Modifier extends Component {
    render() {
        return (
            <div>
                <Table data={table_03} />
            </div>
        );
    }
}