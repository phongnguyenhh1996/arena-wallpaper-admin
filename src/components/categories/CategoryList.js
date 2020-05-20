import React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="createdDate" />
            <ImageField source="imgUrl" />
        </Datagrid>
    </List>
);