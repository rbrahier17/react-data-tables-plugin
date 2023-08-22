
export interface IColumn {
  title: string;
  data: string;
}

export interface IRow {
  [key: string]: string;
}

export interface ISorting {
  column: string;
  order: "asc" | "desc";
}