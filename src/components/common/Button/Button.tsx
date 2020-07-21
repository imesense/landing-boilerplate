import React from 'react';
import styles from './Button.module.scss';
import { scroller } from 'react-scroll';

interface ButtonProps {
  type: 'button' | 'submit';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  label?: string;
  disabled?: boolean;
  bouncing?: boolean;
  anchor?: { target: string; speed?: number };
}

export default class Button extends React.Component<ButtonProps> {
  private onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const anchor = this.props.anchor;

    if (anchor) {
      e.preventDefault();
      scroller.scrollTo(anchor.target, {
        duration: anchor.speed || 1000,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } else {
      this.props.onClick(e);
    }
  };

  static defaultProps = { type: 'button' };

  getClass(): string {
    const { className, disabled, bouncing } = this.props;
    return `${styles.Button} ${className || ''} ${disabled ? styles.Button_disabled : ''} ${bouncing ? styles.Button_bouncing : ''}`.trim();
  }

  render() {
    const { type, children, label, disabled } = this.props;
    return type === 'button'
      ? <a href="" className={this.getClass()} onClick={this.onClick}>{children}</a>
      : <input type="submit" className={this.getClass()} value={label} disabled={disabled} />
  }
}