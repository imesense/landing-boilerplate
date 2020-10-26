import padStart from 'lodash-es/padStart';
import pick from 'lodash-es/pick';

export default class Utils {
  static DEVICE_WIDTHS = {
    PHONE: 500,
  };

  static getScreenWidth(): number {
    return window.screen.width;
  }

  static getFormValueFromState<T>(state: T, keys: (keyof T)[], rename?: { [K in keyof T]: string }): Partial<T> {
    const data = pick(state, keys);

    if (rename) {
      Object.keys(rename).forEach(oldKey => {
        data[rename[oldKey]] = data[oldKey];
        delete data[oldKey];
      });
    }

    return data;
  }

  static formatDate(date: string | Date, format: 'dd.mm.yyyy'): string {
    const currentDate = typeof date === 'string' ? new Date(date) : date;

    if (format === 'dd.mm.yyyy') {
      return `${
        padStart(currentDate.getDate().toString(), 2, '0')
      }.${
        padStart((currentDate.getMonth() + 1).toString(), 2, '0')
      }.${
        currentDate.getFullYear().toString()
      }`;
    }
  }
}