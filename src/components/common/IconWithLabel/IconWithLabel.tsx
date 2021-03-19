import { PropsWithChildren } from "react";
import styles from './IconWithLabel.module.scss';

export interface IconWithLabelProps {
  folder: string;
  id: number;
  format?: string;
  alt?: string;
  averageIconHeight?: number;
}

export const IconWithLabel = (props: PropsWithChildren<IconWithLabelProps>) => (
  <figure>
    <div 
      className={styles.image} 
      style={{ height: props.averageIconHeight ? `${props.averageIconHeight}px` : null }}
    >
      <img src={`/images/${props.folder}/${props.id}.${props.format ?? 'svg'}`} alt={props.alt} />
    </div>

    <figcaption className={`${styles.label} ${styles[`label_${props.id}`]}`}>{props.children}</figcaption>
  </figure>
);