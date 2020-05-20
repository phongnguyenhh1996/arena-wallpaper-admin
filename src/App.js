import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CategoryList } from './components/CategoryList'
import authProvider from './authProvider'
import { API_URL } from './constants/api'

const dataProvider = jsonServerProvider(API_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="categories" list={CategoryList}/>
  </Admin>  
)

export default App;