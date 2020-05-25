import React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="createdAt" />
            <TextField source="viewCount" />
            <ImageField source="image.imageUrl" title="Image" />
        </Datagrid>
    </List>
);