# react-data-tables-plugin

Note: This project was developed as part of the JS/React Application Developer training program at OpenClassrooms. It is a partial adaptation of the jQuery DataTables plugin (https://datatables.net/).

## Introduction

`react-data-tables-plugin` is a React component for displaying data in tabular format. It provides various features to manage and customize the presentation of your data. This plugin is designed to simplify the process of integrating data tables into your React applications.

## Features

- Display data in a tabular format.
- Sort data by columns in ascending or descending order.
- Control the number of entries per page.
- Implement search and filtering capabilities.
- Display pagination for easy navigation through large data sets.
- Color scheme customization to match your application's style.

## Installation

You can install the `react-data-tables-plugin` via npm:

```bash
npm install react-data-tables-plugin
```

## Usage

To use `react-data-tables-plugin`, you need to import it into your React application and pass the necessary data and configuration as props. Here's a very basic example of how to use the plugin:

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
    id: "id-1",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: "25",
    id: "id-2",
  },
];

/**
 * Note:  Ensure that each data object has a unique 'id' property, serving as a * string identifier. Refer to the "Performance" section for more details.
 */

function App() {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
```

![Screenshot of this basic example](./dist/screenshots/basic-example.png)

## Configuration

### Properties

| Prop Name | Type | Required | Description |
| --- | --- | --- | --- |
| columns | Array of Objects (IColumn[]) with 'title' (string) and 'data' (string) properties | true | An array of objects that define the configuration of table columns. Each object should have a 'title' property (string) for the column title and a 'data' property (string) specifying the data key to display in that column. |
| data | Array of Objects (IRow[]) with string keys and string values | true | An array of objects where each object represents a row of data with string keys and string values. |
| className | string | false | Custom class name for styling (optional). |
| mainColor | string | false | The main color for custom styling (optional). |
| accentColor | string | false | The accent color for custom styling (optional). |

## Performance

This plugin incorporates performance optimizations:

- Components are wrapped with [`React.memo`](https://react.dev/reference/react/memo) to prevent unnecessary re-renders. [`React.memo`](https://react.dev/reference/react/memo) is a higher-order component that memoizes the rendered output of a component, preventing re-renders if the input props remain unchanged.

- It is very important for optimal performance that objects passed as props to construct the table body include a unique 'id' property. This uniqueness enables the avoidance of unnecessary re-renders. The 'id' property is utilized as the 'key' for each object displayed in the table. To generate unique identifiers, consider using libraries such as [uuid](https://www.npmjs.com/package/uuid).

## Reporting Issues

Please note that this project is part of a training program and maintenance cannot be guaranteed but if you come across any issues or have suggestions for improvements, please don't hesitate to open an issue on the [GitHub Issues](https://github.com/rbrahier17/react-data-tables-plugin/issues) page.
