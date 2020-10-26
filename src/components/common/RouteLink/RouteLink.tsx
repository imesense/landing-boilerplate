import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';
import { ReactNode } from "react";

interface RouteLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  activeLinkTmpl?: RegExp;
  children?: ReactNode;
}

export const RouteLink = (props: RouteLinkProps) => {
  const router = useRouter();
  const { href, className, activeLinkTmpl, children, activeClassName, ...otherProps } = props;

  const isActive = activeLinkTmpl ? activeLinkTmpl.test(router.pathname) : router.pathname === href;

  return (
    <Link href={href} {...otherProps}>
      <a className={`${className} ${isActive ? activeClassName : ''}`.trim()}>
        {children}
      </a>
    </Link>
  );
}