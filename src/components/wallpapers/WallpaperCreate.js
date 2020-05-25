import React, {useCallback} from 'react';
import { Create, SimpleForm, TextInput, SaveButton, Toolbar,  ImageInput, ImageField, ReferenceInput, SelectInput } from 'react-admin';
import { useForm } from 'react-final-form';
import { API_URL } from '../../constants/api';

const SaveWithNoteButton = ({ handleSubmitWithRedirect, ...props }) => {

    const form = useForm();
  
    const handleClick = useCallback(async () => {
        const data = new FormData();
        const imagedata = form.getFieldState('image').value.rawFile;
        data.append('image', imagedata);
        let res = await fetch(API_URL + '/media', {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: data
        }).then(response => response.json())
        form.change('image', res.data)
        handleSubmitWithRedirect('list');
    }, [form, handleSubmitWithRedirect]);
  
    return <SaveButton {...props} handleSubmitWithRedirect={handleClick} />;
};

const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveWithNoteButton
            label="Save"
            redirect="list"
            submitOnEnter={false}
        />
    </Toolbar>
);

export const WallpaperCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<PostCreateToolbar />}>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="hero" />
            <ReferenceInput label="Category" source="categoryId" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);