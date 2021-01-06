import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  sectionClass?: string;
  contClass?: string;
  isContFlex?: boolean;
  title?: React.ReactNode;
  titleClass?: string;
  alt?: boolean;
  id?: string;
}

export class Section extends React.Component<SectionProps> {
  static defaultProps: SectionProps = { isContFlex: true };
  
  render() {
    const { sectionClass, titleClass, title, contClass, isContFlex, alt, children, id } = this.props;
    return (
      <section className={`${styles.Section} ${sectionClass} ${alt ? styles.Section_alt : ''}`.trim()} id={id}>
        { this.props.title 
          ? <h3 className={`${styles.Section__title} ${titleClass || ''}`.trim()}>{title}</h3>
          : <></>
        }
        
        <div 
          className={
            `${styles.Section__cont} ${contClass || ''} ${isContFlex ? 'cont' : ''}`.trim()
          }
        >
          {children}
        </div>
      </section>
    );
  }
}