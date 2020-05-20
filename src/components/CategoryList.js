import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="createdDate" />
            <TextField source="imgUrl" />
        </Datagrid>
    </List>
);