import { format } from "date-fns";

export function formatDate(date: Date, formatPattern: string = "MMMM yyyy") {
  return `${format(date, formatPattern)}`;
}
