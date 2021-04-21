import { useState } from "react";

export const useForm = <T extends string>(
  rename?: { [K in T]: string },
): [(key: T) => string, () => { [k in string]: string }, (key: T) => (newValue: string) => void] => {
  type Value = { [k in T]?: string };
  const [value, setValue] = useState<Value>({});

  const getFormValueWithTranslatedKeys = (): Value => {
    const data = { ...value };

    if (rename) {
      Object.keys(rename).forEach(oldKey => {
        data[rename[oldKey]] = data[oldKey];
        delete data[oldKey];
      });
    }

    return data;
  }

  return [
    (key: T) => value[key],
    () => getFormValueWithTranslatedKeys(),
    (key: T) => (newValue: string) => setValue({
      ...value,
      [key]: newValue,
    }),
  ];
};
