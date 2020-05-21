import React, {useCallback} from 'react';
import { Create, SimpleForm, TextInput, SaveButton, Toolbar,  ImageInput, ImageField } from 'react-admin';
import { useForm } from 'react-final-form';
import { API_URL } from '../../constants/api';

const SaveWithNoteButton = ({ handleSubmitWithRedirect, ...props }) => {

    const form = useForm();
  
    const handleClick = useCallback(async () => {
        const data = new FormData();
        const imagedata = form.getFieldState('imageUrl').value.rawFile;
        data.append('image', imagedata);
        let res = await fetch(API_URL + '/media', {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: data
        }).then(response => response.json())
        form.change('imageUrl', res)
        handleSubmitWithRedirect('list');
    }, [form, handleSubmitWithRedirect]);
  
    return <SaveButton {...props} handleSubmitWithRedirect={handleClick} />;
};

const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveWithNoteButton
            label="Custom Save"
            redirect="list"
            submitOnEnter={false}
        />
    </Toolbar>
);

export const CategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<PostCreateToolbar />}>
            <TextInput source="name" />
            <ImageInput source="imageUrl" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);