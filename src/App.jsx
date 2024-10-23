import React ,{useState , useEffect} from 'react';
import {  Routes, Route } from 'react-router-dom';
import Widgets from './components/Dashboard/Widgets';
import Leads from './components/Leads/Leads'
import Layout from "./components/Dashboard/Layout"
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/leads" element={<Widgets />} />
          <Route path="/analytics" element={<Leads type="Leads Analytics"/>} />
          <Route path="/report" element={<Leads type="Leads Report" />} />
        </Routes>
      </Layout>
  );
};

export default App;