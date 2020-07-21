import pick from 'lodash/pick';

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
}