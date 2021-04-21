
import classNames from 'classnames';
import { FC } from 'react';
import styles from './SliderArrow.module.scss';

interface SliderArrowProps {
  position: 'prev' | 'next';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const SliderArrow: FC<SliderArrowProps> = props => (
  <span 
    className={
      classNames(
        [styles.root, styles[`root_${props.position}`], { [styles.root_disabled]: props.disabled }, props.className]
      )
    } 
    onClick={e => {
      e.preventDefault();
      props.onClick();
    }}
  />
);