import { Component } from 'react';
import PolicyModal from './PolicyModal';

interface PolicyLinkProps {
  className?: string;
}

interface PolicyLinkState {
  isModalVisible: boolean;
}

export default class PolicyLink extends Component<PolicyLinkProps, PolicyLinkState> {
  private closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  private openModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.setState({ isModalVisible: true });
    e.preventDefault();
  };

  constructor(props: PolicyLinkProps) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render(): JSX.Element {
    const { className, children } = this.props;
    return (
      <>
        <PolicyModal visible={this.state.isModalVisible} onClose={this.closeModal} />

        <a className={className} href="" onClick={this.openModal}>
          {children || 'Оставляя заявку, вы соглашаетесь с Политикой Конфиденциальности'}
        </a>
      </>
    );
  }
}