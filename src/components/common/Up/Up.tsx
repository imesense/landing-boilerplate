import { Component, ReactNode } from 'react';
import { Link } from 'react-scroll';
import styles from './Up.module.scss';

interface UpState {
  visible: boolean;
}

export class Up extends Component<{}, UpState> {
  private isNeedToShowUp = () => window.scrollY > 1200;

  private scrollListener = () => {
    const isNeedToShowUp = this.isNeedToShowUp();

    if (isNeedToShowUp !== this.state.visible) {
      this.setState({ visible: isNeedToShowUp });
    }
  };

  constructor(props: {}) {
    super(props);

    this.state = { visible: false };
  }

  componentDidMount(): void {
    this.setState({ visible: this.isNeedToShowUp() });
    document.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('scroll', this.scrollListener);
  }

  render(): ReactNode {
    return (
      <>
        <div id="top"></div>
        <Link 
          to="top" 
          className={`${styles.root} ${this.state.visible ? styles.root_visible : ''}`.trim()} 
          smooth={true} 
          duration={600}
        ></Link>
      </>
    );
  }
}