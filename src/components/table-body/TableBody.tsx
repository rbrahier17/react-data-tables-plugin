import './TableBody.css'
import { IColumn, IRow } from "../../types/data-table";

interface TableBodyProps {
  columns: IColumn[];
  displayedData: IRow[];
}

export default function TableBody({ columns, displayedData }: TableBodyProps) {
  return (
    <tbody className='TableBody'>
      {displayedData.length === 0 ? (
        <tr>
          <td colSpan={columns.length} className='no-data'>
            No data available
          </td>
        </tr>
      ) : (
        displayedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{row[column.data]}</td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};