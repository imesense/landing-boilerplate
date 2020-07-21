import styles from './SliderArrow.module.scss';

interface SliderArrowProps {
  position: 'prev' | 'next';
}

export default function SliderArrow({ position }: SliderArrowProps) {
  return <span className={`${styles.SliderArrow} ${styles[`SliderArrow_${position}`]}`}></span>;
}