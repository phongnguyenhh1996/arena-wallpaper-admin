import React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const WallpaperList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="createdAt" />
            <TextField source="viewCount" />
            <TextField source="useCount" />
            <TextField source="hero" />
            <ImageField source="image.imageUrl" title="Image" />
        </Datagrid>
    </List>
);