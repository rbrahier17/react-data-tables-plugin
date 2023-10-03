import "./TableBody.css";
import { ITableBodyProps } from "../../types/data-table";

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
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} data-testid={`data-cell-for-column-${column.data}`}>
                <div>{row[column.data]}</div>
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
