import { Component, Fragment } from "react";
import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps { 
  items: { 
    name: string; 
    link: string 
  }[];
  className?: string;
};

export class Breadcrumbs extends Component<BreadcrumbsProps> {
  render() {
    const { items, className } = this.props;
    
    return (
      <div className={`${styles.root} ${className || ''}`.trim()}>
        {items.map(
          ({ name, link }, i) => i === items.length - 1 
            ? name
            : (<Fragment key={i}><a href={link} className={styles.link}>{name}</a> / </Fragment>)
        )}
      </div>
    );
  }
}