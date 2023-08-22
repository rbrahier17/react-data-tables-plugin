import "./TableHeader.css";
import { IColumn, ISorting } from "../../types/data-table";


interface TableHeaderProps {
  columns: IColumn[];
  sorting: ISorting;
  onSortingChange: (sorting: ISorting) => void;
}

export default function TableHeader({ columns, sorting, onSortingChange }: TableHeaderProps) {
  const handleColumnClick = (column: string) => {
    onSortingChange({
      column,
      order: sorting.column === column ? (sorting.order === "asc" ? "desc" : "asc") : "asc",
    });
  };

  return (
    <thead className='TableHeader'>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>
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
                  className={`arrow-down ${sorting.column === column.data && sorting.order === "desc" ? "active" : ""}`}
                ></span>
              </div>
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}
