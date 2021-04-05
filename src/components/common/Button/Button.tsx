import React, { FC, FunctionComponent, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

export interface ButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  label?: string;
  disabled?: boolean;
  bouncing?: boolean;
  anchor?: { target: string; speed?: number };
  preventDefault?: boolean;
  link?: string;
  theme?: 'alt';
  href?: string;
  target?: '_blank';
}

export const Button: FC<ButtonProps> = props => {
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
    const { className, disabled, bouncing, theme } = props;
    return `${
      styles.Button
    } ${
      className || ''
    } ${
      disabled ? styles.Button_disabled : ''
    } ${
      bouncing ? styles.Button_bouncing : ''
    } ${
      theme ? styles[`Button_${theme}`] : ''
    }`.trim();
  }

  const type = props.type || 'button';
  const { children, label, disabled, href, target } = props;

  return type === 'button' 
    ? (
        !!href
          ? <a className={getClass()} href={href} target={target}>{children}</a>
          : <a className={getClass()} onClick={onClick}>{children}</a>
      )
    : <input type="submit" className={getClass()} value={label} disabled={disabled} />;
}