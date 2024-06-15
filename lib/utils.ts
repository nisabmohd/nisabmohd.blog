import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Split the formatted date into components
  const [month, day, year] = formattedDate.split(" ");

  // Ensure the month is exactly three characters
  const abbreviatedMonth = month.slice(0, 3);

  return `${abbreviatedMonth} ${day} ${year}`;
}
