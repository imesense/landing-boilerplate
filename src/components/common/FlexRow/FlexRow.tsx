import classNames from "classnames";
import { FC } from "react";
import styles from './FlexRow.module.scss';

export const FlexRow: FC<{ className?: string }> = props => (
  <div className={classNames(styles.root, props.className)}>
    {props.children}
  </div>
);