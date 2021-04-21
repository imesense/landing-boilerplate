import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-scroll";
import styles from './ScrollLink.module.scss';

interface ScrollLinkProps {
  target: string;
  className?: string;
}

export const ScrollLink: FC<ScrollLinkProps> = props => (
  <Link to={props.target} smooth={true} duration={500} className={classNames(styles.root, props.className)}>
    {props.children}
  </Link>
);
