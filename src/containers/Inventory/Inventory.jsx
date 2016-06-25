import React, { Component } from 'react';
import { Table } from 'components';
import { table_02 } from 'datas';


export default class Inventory extends Component {
    render() {
        return (
            <div>
                <Table data={table_02} />
            </div>
        );
    }
}