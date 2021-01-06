import { Component, ComponentType } from "react";

export function withRevealWrapper<P>(
  Child: ComponentType<P>, 
  cfg: scrollReveal.ScrollRevealObjectOptions & { selector: string },
) {
  return class extends Component<P> {
    componentDidMount(): void {
      import('scrollreveal').then(m => {
        const ScrollReveal = m.default;
        const { selector, ...options } = cfg;
        ScrollReveal().reveal(selector, options);
      });
    }

    render() {
      return <Child {...this.props} />;
    }
  }
}