import styles from './Field.module.scss';
import { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

interface FieldProps {
  type: 'text' | 'phone' | 'area' | 'email';
  placeholder: string;
  name?: string;
  className?: string;
  rows?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Field = ({ type, placeholder, name, className, rows, value, onChange }: FieldProps) => {
  const restProps = {
    className: `${styles.Field} ${className || ''}`.trim(),
    required: true,
    placeholder,
    name,
    value,
    onChange,
  };

  switch (type) {
    case 'text': case 'email':
      return <input type={type} {...restProps} />;
    case 'area':
      return <textarea rows={rows} {...restProps}></textarea>;
    case 'phone':
      return <InputMask mask="+7 (999) 999-99-99" type="tel" {...restProps} />;
  }
}