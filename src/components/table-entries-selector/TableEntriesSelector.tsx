import "./TableEntriesSelector.css";

interface TableEntriesSelectorProps {
  numberOfEntries: number;
  onEntriesChange: (numberOfEntries: number) => void;
}

export default function TableEntriesSelector({ numberOfEntries, onEntriesChange }: TableEntriesSelectorProps) {
  const options = [2, 4, 5, 10, 25, 50, 100];

  return (
    <div className='TableEntriesSelector'>
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
