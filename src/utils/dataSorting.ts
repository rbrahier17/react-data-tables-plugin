import { IRow, ISorting } from "../types/data-table";

export function sortData(data: IRow[], sorting: ISorting): IRow[] {
  const { column, order } = sorting;

  return [...data].sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (valueA < valueB) {
      return order === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
}
