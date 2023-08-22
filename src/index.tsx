import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './DataTable';

// Import fake data
import { columnsExample, dataExample } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <DataTable columns={columnsExample} data={dataExample}/>
  </React.StrictMode>
);
;
