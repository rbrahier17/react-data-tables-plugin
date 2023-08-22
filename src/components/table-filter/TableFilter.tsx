import "./TableFilter.css";
import { IRow } from "../../types/data-table";

interface TableFilterProps {
  data: IRow[];
  onSearchInput: (dataState: IRow[]) => void;
}

export default function TableFilter({ data, onSearchInput }: TableFilterProps) {
  function onInputChange(inputValue: string) {
    const filteredRows = data.filter((row) => {
      const rowValues = Object.values(row).join(" ").toLowerCase();
      return rowValues.includes(inputValue.toLowerCase());
    });

    onSearchInput([...filteredRows]);
  }

  return (
    <div className='TableFilter'>
      <label htmlFor='search'>Search:</label>
      <input type='text' id='search' name='search' onChange={(event) => onInputChange(event.target.value)} />
    </div>
  );
}
