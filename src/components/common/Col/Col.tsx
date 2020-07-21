import React from 'react';

interface ColProps {
  p?: number;
  t?: number;
  s?: number;
  className?: string;
}

export default class Col extends React.Component<ColProps> {
  getClass(): string {
    const { p, t, s, className } = this.props;
    return `${p ? `col${p}p` : ''} ${t ? `col${t}t` : ''} ${s ? `col${s}s` : ''} ${className || ''}`.trim();
  }

  render() {
    return <div className={this.getClass()}>{this.props.children}</div>;
  }
}