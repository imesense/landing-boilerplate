import classNames from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from './Dropdown.module.scss';

interface DropdownProps { 
  anchor?: JSX.Element;
  contentClassName?: string;
  onChangeVisible?: (visible: boolean) => void;
}

export const Dropdown: FC<DropdownProps> = props => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: PointerEvent) => {
      if (wrapperRef && !wrapperRef.current.contains((e.target as any)) && visible) {
        setVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  });

  return (
    <div ref={wrapperRef}>
      <div onClick={() => setVisible(!visible)} className={styles.anchor}>
        {props.anchor}
      </div>

      <div className={classNames(styles.content, visible && styles.content_visible, props.contentClassName)}>
        {props.children}
      </div>
    </div>
  );
}; 
