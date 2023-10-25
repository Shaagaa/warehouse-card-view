import React, { useState } from 'react';
import './App.css';
import WarehouseListView from '../src/component/WarehouseListView';
import TabView from '../src/component/tab';
// const xmlrpc = require('xmlrpc');

function App() {

  return (
    <div>
      <div>
       <TabView/>
      </div>
      {/* <WarehouseListView /> */}
    </div>
  );
}

export default App;