import "./TableEntriesSelector.css";
import { ITableEntriesSelectorProps } from "../../types/data-table";

export default function TableEntriesSelector({ numberOfEntries, onEntriesChange }: ITableEntriesSelectorProps) {
  const options = [5, 10, 15, 20, 25, 50, 100];

  return (
    <div id='TableEntriesSelector' data-testid='table-entries-selector'>
      <label htmlFor='entries'>Show</label>
      <select
        id='entries'
        value={numberOfEntries}
        onChange={(event) => onEntriesChange(parseInt(event.target.value, 10))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor='entries'>entries</label>
    </div>
  );
}
