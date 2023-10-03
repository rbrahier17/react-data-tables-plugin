import "./TableFilter.css";
import { ITableFilterProps } from "../../types/data-table";

export default function TableFilter({ data, onSearchInput }: ITableFilterProps) {
  function onInputChange(inputValue: string) {
    const filteredRows = data.filter((row) => {
      const rowValues = Object.values(row).join(" ").toLowerCase();
      return rowValues.includes(inputValue.toLowerCase());
    });

    onSearchInput([...filteredRows]);
  }

  return (
    <div id='TableFilter' data-testid='table-filter'>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        name='search'
        onChange={(event) => onInputChange(event.target.value)}
        data-testid='table-filter-input'
      />
    </div>
  );
}
