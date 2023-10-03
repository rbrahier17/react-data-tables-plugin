# React-Data-Tables-Plugin

`React-Data-Tables-Plugin` is a React component for displaying data in tabular format. It provides various features to manage and customize the presentation of your data. This plugin is designed to simplify the process of integrating data tables into your React applications.

## Features

- Display data in a tabular format.
- Sort data by columns in ascending or descending order.
- Control the number of entries per page.
- Implement search and filtering capabilities.
- Display pagination for easy navigation through large data sets.
- Color scheme customization to match your application's style.

## Installation

You can install the `React-Data-Tables-Plugin` via npm:

```bash
npm install react-data-tables-plugin
```

## Usage

To use `React-Data-Tables-Plugin`, you need to import it into your React application and pass the necessary data and configuration as props. Here's a very basic example of how to use the plugin:

```jsx
import React from "react";
import DataTable from "react-data-tables-plugin";

const columns = [
  {
    title: "First Name",
    data: "firstName",
  },
  {
    title: "Last Name",
    data: "lastName",
  },
  {
    title: "Age",
    data: "age",
  },
];

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "30",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: "25",
  },
];

function App() {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
```

![Result of this basic example](./screenshots/basic-example.png)

## Configuration

### Properties

- `columns`: An array of column definitions, specifying the title and data field for each column.
- `data`: An array of data rows to be displayed in the table.
- `mainColor` and `accentColor`: Custom colors for styling (optional).

### Data Types

IMPORTANT: The data provided to the `React-Data-Tables-Plugin` should be of type "string". 

