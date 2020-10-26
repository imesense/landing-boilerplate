import styles from './Preloader.module.scss';

export function Preloader(props: { className?: string }) {
  return <span className={`${styles.root} ${props.className || ''}`.trim()} />;
}