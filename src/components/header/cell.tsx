import * as React from 'react'
import {
    Table
} from 'semantic-ui-react'
import AbstractProvider from "../providers/AbstractProvider";

const sortMap = {
    'asc': 'ascending',
    'desc': 'descending'
};

interface HeaderCellProps {
    provider: AbstractProvider,
    item: any,
    sort: string;
}

export default class HeaderCell extends React.Component<HeaderCellProps, {}> {
    handleSort = () => {
        const { provider, item, sort } = this.props;
        if (item.sortable) {
            let dir;
            if (sort === 'desc') {
                dir = null;
            } else {
                dir = (sort === 'asc') ? 'desc' : 'asc';
            }
            provider.setSortField(item.field, dir);
        }
    };

    render() {
        const { item, sort } = this.props;
        let sorted;

        if (sort) {
            sorted = sortMap[sort];
        }

        return (
            <Table.HeaderCell
                sorted={sorted}
                onClick={this.handleSort}
            >{item.title || ''}</Table.HeaderCell>
        )
    }
}
