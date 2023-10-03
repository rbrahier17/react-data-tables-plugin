import { ITableInfoProps } from "../../types/data-table";

export default function TableInfo({
  dataLength,
  dataStateLength,
  displayedDataStart,
  displayedDataEnd,
}: ITableInfoProps) {
  const entryLabel = dataStateLength === 1 ? "entry" : "entries";

  const getEntriesRangeText = () => {
    if (dataStateLength === 0) return "No entries";

    const start = displayedDataStart === 0 ? 1 : displayedDataStart + 1;
    const end = displayedDataEnd;

    return `Showing ${start} to ${end} of ${dataStateLength} ${entryLabel}`;
  };

  const getFilteredEntriesText = () => {
    return dataLength === dataStateLength ? "" : ` (filtered from ${dataLength} total entries)`;
  };

  return (
    <p data-testid='table-info'>
      {getEntriesRangeText()}{getFilteredEntriesText()}
    </p>
  );
}
