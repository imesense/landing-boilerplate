import styles from './PaginationWrapper.module.scss';
import ReactPaginate from 'react-paginate';

interface PaginationWrapperProps {
  total: number;
  current: number;
  onChange: (p: number) => void;
}

export const PaginationWrapper = (props: PaginationWrapperProps) => (
  <ReactPaginate 
    pageCount={props.total} 
    pageRangeDisplayed={2} 
    marginPagesDisplayed={2} 
    forcePage={props.current - 1} 
    onPageChange={({ selected }) => props.onChange(selected + 1)} 
    containerClassName={styles.root}
    previousLabel="Назад"
    nextLabel="Далее"
    pageClassName={styles.item}
    previousClassName={styles.item}
    nextClassName={styles.item}
    previousLinkClassName={styles.link}
    nextLinkClassName={styles.link}
    pageLinkClassName={styles.link}
    activeClassName={styles.item_active}
    activeLinkClassName={styles.link_active}
    breakClassName={`${styles.item} ${styles.item_break}`}
    breakLinkClassName={`${styles.link} ${styles.link_break}`}
  />
);