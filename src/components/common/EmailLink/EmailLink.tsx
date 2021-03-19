export const EmailLink = (props: { email: string; className?: string; }) => (
  <a href={`mailto:${props.email}`} className={props.className}>{props.email}</a>
);