import { FC, Fragment } from "react";
import styles from './Breadcrumbs.module.scss';
interface BreadcrumbsProps { 
  items: { 
    name: string; 
    link: string 
  }[];
  className?: string;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = props => (
  <div className={`${styles.root} ${props.className || ''}`.trim()}>
    {props.items.map(
      ({ name, link }, i) => i === props.items.length - 1 
        ? name
        : (<Fragment key={i}><a href={link} className={styles.link}>{name}</a> / </Fragment>)
    )}
  </div>
);