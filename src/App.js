import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CategoryList } from './components/CategoryList'

const dataProvider = jsonServerProvider('http://localhost:5000/arenawallpaper/us-central1/api');
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="categories" list={CategoryList}/>
  </Admin>  
)

export default App;