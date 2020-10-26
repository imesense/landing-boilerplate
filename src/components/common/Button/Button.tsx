import React, { FunctionComponent, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

interface ButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  label?: string;
  disabled?: boolean;
  bouncing?: boolean;
  anchor?: { target: string; speed?: number };
  preventDefault?: boolean;
  link?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
  const router = useRouter();
  
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { anchor, link } = props;

    if (link) {
      e.preventDefault();
      router.push(link);
      return;
    }

    if (anchor) {
      e.preventDefault();
      scroller.scrollTo(anchor.target, {
        duration: anchor.speed || 1000,
        delay: 0,
        smooth: 'easeInOutQuart',
      });

    } else {
      if (props.preventDefault) {
        e.preventDefault();
      }
      
      props.onClick?.(e);
    }
  };

  const getClass = (): string => {
    const { className, disabled, bouncing } = props;
    return `${
      styles.Button
    } ${
      className || ''
    } ${
      disabled ? styles.Button_disabled : ''
    } ${
      bouncing ? styles.Button_bouncing : ''
    }`.trim();
  }

  const type = props.type || 'button';
  const { children, label, disabled } = props;

  return type === 'button' 
    ? <a className={getClass()} onClick={onClick}>{children}</a>
    : <input type="submit" className={getClass()} value={label} disabled={disabled} />;
}