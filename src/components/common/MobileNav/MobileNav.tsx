import { Component } from "react";
import styles from './MobileNav.module.scss';

export class MobileNav extends Component<{}, { visible: boolean }> {
  private showMenu = () => this.setState({ visible: true });

  private hideMenu = () => this.setState({ visible: false });

  constructor(props: {}) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <span className={styles['menu-button']} onClick={this.showMenu} />

        <div 
          className={`${styles.overlay} ${visible ? styles.overlay_visible : ''}`.trim()} 
          onClick={this.hideMenu} 
        />

        <div className={`${styles.root} ${visible ? styles.root_visible: ''}`.trim()}>
          <span className={styles.close} onClick={this.hideMenu} />

          <div className={styles.links}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}