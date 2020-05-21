import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CategoryList, CategoryCreate } from './components/categories'
import authProvider from './authProvider'
import { API_URL } from './constants/api'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(API_URL, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="categories" list={CategoryList} create={CategoryCreate}/>
  </Admin>  
)

export default App;