import styles from './Logo.module.scss';

interface LogoProps {
  width?: number;
  height?: number;
  alt?: boolean;
  className?: string;
}

export default function Logo({ width, height, alt, className }: LogoProps) {
  return (
    <span 
      className={`${styles.Logo} ${alt ? styles.Logo_alt : ''} ${className || ''}`.trim()} 
      style={{ width, height }} 
    />
  );
}