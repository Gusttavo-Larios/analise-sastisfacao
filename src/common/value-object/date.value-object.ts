import { Dayjs } from "dayjs";
import dayjs from "../config/dayjs.config";

type DateType = string | Date;

export class DateValueObject {
  private readonly date: Dayjs;

  constructor(date: DateType) {
    this.date = dayjs(date);
  }

  static create(date: DateType) {
    return new DateValueObject(date);
  }

  static today() {
    return new DateValueObject(dayjs().toDate());
  }

  getValue() {
    return this.date.toDate();
  }

  isBetween(startDate: DateValueObject, endDate: DateValueObject) {
    return this.date.isBetween(
      startDate.getValue(),
      endDate.getValue(),
      "day",
      "[]"
    );
  }
}
