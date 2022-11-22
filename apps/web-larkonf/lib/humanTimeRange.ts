import { format, isSameDay, isSameMonth } from "date-fns";
import { nb } from "date-fns/locale";

export default function humanTimeRange(start: Date, end: Date): string {
  if (isSameDay(start, end)) {
    return `${format(start, "d. MMMM yyyy, HH:mm", {
      locale: nb,
    })}–${format(end, "HH:mm", { locale: nb })}`;
  }

  if (isSameMonth(start, end)) {
    return `${format(start, "d.", { locale: nb })}–${format(
      end,
      "d. MMMM yyyy",
      { locale: nb }
    )}`;
  }

  return `${format(start, "d. MMMM", { locale: nb })}–${format(
    end,
    "d. MMMM yyyy",
    { locale: nb }
  )}`;
}
