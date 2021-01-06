import styles from './Logo.module.scss';
import { useRouter } from 'next/router';

interface LogoProps {
  width?: number;
  height?: number;
  alt?: boolean;
  className?: string;
  big?: boolean;
}

export const Logo = ({ width, height, alt, className, big }: LogoProps) => {
  const router = useRouter();

  return (
    <span 
      className={
        `${styles.Logo} ${alt ? styles.Logo_alt : ''} ${className || ''} ${big ? styles.Logo_big : ''}`.trim()
      } 
      style={{ width, height }}
      onClick={() => router.push('/')}
    />
  );
}