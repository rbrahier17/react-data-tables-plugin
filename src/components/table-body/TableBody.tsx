/**
 * TableBody.tsx
 */

// Import styles
import "./TableBody.css";

// Import interfaces
import { IColumn, IRow, ITableBodyProps } from "../../interfaces/data-table-interfaces";
import React from "react";

/**
 * Memoized Table Row component
 *
 * @param row - The data for the row.
 * @param columns - The configuration of table columns.
 * @returns The TableRow component.
 */
const TableRow = React.memo(({ row, columns }: { row: IRow; columns: IColumn[] }) => {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <td key={`${row.id}-${columnIndex}`} data-testid={`data-cell-for-column-${column.data}`}>
          <div>{row[column.data]}</div>
        </td>
      ))}
    </tr>
  );
});

/**
 * Component for rendering the body of the data table.
 * If there is no data to display a message "No data available" is displayed instead.
 *
 * @param columns - The configuration of table columns.
 * @param displayedData - The data to be displayed in the table body.
 * @returns The TableBody component.
 */
const TableBody = React.memo(({ columns, displayedData }: ITableBodyProps) => {
  // Display a warning if any objects in the displayedData array lack the 'id' property,
  // which is essential for uniquely identifying items in the data table.
  if (displayedData.some((row) => !row.id)) {
    console.warn(
      "All object items to be displayed in the data table should have a property 'id' with a unique identifier."
    );
  }

  return (
    <tbody id='TableBody' data-testid='table-body' key={displayedData.length}>
      {displayedData.length === 0 ? (
        <tr>
          <td colSpan={columns.length} id='TableBody_no-data' data-testid='table-body-no-data'>
            <div>No data available</div>
          </td>
        </tr>
      ) : (
        displayedData.map((row, index) => <TableRow key={(row.id || index).toString()} row={row} columns={columns} />)
      )}
    </tbody>
  );
});

export default TableBody;
