import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';

import { columnsExample, dataExample } from "./data";

test('No test yet', () => {
  render(<DataTable columns={columnsExample} data={dataExample}/>);
});
