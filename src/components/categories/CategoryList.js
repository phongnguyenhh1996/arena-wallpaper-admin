import React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="createdDate" />
            <TextField source="viewCount" />
            <ImageField source="imageUrl.data.imageUrl" title="Image" />
        </Datagrid>
    </List>
);