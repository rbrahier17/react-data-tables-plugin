/**
 * TableBody.tsx
 */

// Import styles
import "./TableBody.css";

// Import interfaces
import { ITableBodyProps } from "../../interfaces/data-table-interfaces";

/**
 * Component for rendering the body of the data table.
 * If there is no data to display a message "No data available" is displayed instead.
 *
 * @param columns - The configuration of table columns.
 * @param displayedData - The data to be displayed in the table body.
 * @returns The TableBody component.
 */
export default function TableBody({ columns, displayedData }: ITableBodyProps) {
  return (
    <tbody id='TableBody' data-testid='table-body'>
      {displayedData.length === 0 ? (
        <tr>
          <td colSpan={columns.length} id='TableBody_no-data' data-testid='table-body-no-data'>
            <div>No data available</div>
          </td>
        </tr>
      ) : (
        displayedData.map((row, rowIndex) => (
          <tr key={"TR-" + rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={"TD-col" + columnIndex + "-row" + rowIndex} data-testid={`data-cell-for-column-${column.data}`}>
                <div>{row[column.data]}</div>
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
