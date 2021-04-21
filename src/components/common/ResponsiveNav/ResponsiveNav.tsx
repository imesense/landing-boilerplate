import { FC, useEffect, useState } from "react";
import { MobileNav } from "../MobileNav/MobileNav";

interface ResponsiveNavProps { 
  items: JSX.Element[]; 
  maxWidthForMobile?: number; 
  desktopContainerClassName?: string; 
}

export const ResponsiveNav: FC<ResponsiveNavProps> = props => {
  const [windowWidth, setWindowWidth] = useState<number>(null);

  const isMobile = windowWidth <= (props.maxWidthForMobile || 998);

  const getWindowWidth = () => window.innerWidth;

  useEffect(() => {
    if (windowWidth === null) {
      setWindowWidth(getWindowWidth());
    }

    const onWindowWidthChange = () => setWindowWidth(getWindowWidth());

    window.addEventListener('resize', onWindowWidthChange);

    return () => window.removeEventListener('resize', onWindowWidthChange);
  });

  return isMobile 
    ? <MobileNav>{props.items}</MobileNav> 
    : <div className={props.desktopContainerClassName}>{props.items}</div>;
};
