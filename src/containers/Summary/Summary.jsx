import React, { Component } from 'react';
import { Table } from 'components';
import { table_01 } from 'datas';


export default class Summary extends Component {
    render() {
        return (
            <div>
                <Table data={table_01} />
            </div>
        );
    }
}