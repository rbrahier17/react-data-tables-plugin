import "./TableHeader.css";
import { ITableHeaderProps } from "../../types/data-table";

export default function TableHeader({ columns, sorting, onSortingChange }: ITableHeaderProps) {
  const handleColumnClick = (column: string) => {
    onSortingChange({
      column,
      order: sorting.column === column ? (sorting.order === "asc" ? "desc" : "asc") : "asc",
    });
  };

  return (
    <thead id='TableHeader' data-testid='table-header'>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>
            <div>
              <button
                type='button'
                className={`sort-button ${sorting.column === column.data ? sorting.order : ""}`}
                onClick={() => handleColumnClick(column.data)}
              >
                {column.title}
                <div className='arrow-container'>
                  <span
                    className={`arrow-up ${sorting.column === column.data && sorting.order === "asc" ? "active" : ""}`}
                  ></span>
                  <span
                    className={`arrow-down ${
                      sorting.column === column.data && sorting.order === "desc" ? "active" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
