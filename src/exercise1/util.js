import dayjs from "dayjs";

export const DATE_FORMAT = "YYYY-MM-DD HH:mm";

export const convert = ({ date, delta }) => {
  if (!date) {
    return;
  }
  return dayjs(date, DATE_FORMAT).add(delta, "hours").format(DATE_FORMAT);
};
