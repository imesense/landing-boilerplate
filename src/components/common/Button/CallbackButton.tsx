import { Component } from 'react';
import Button from './Button';
import { CallbackModal } from 'components/common/Modal';

interface CallbackButtonProps {
  className?: string;
  bouncing?: boolean;
  formTarget?: string;
}

interface CallbackButtonState {
  isModalVisible: boolean;
}

export default class CallbackButton extends Component<CallbackButtonProps, CallbackButtonState> {
  private openModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.setState({ isModalVisible: true });
    e.preventDefault();
  };

  private closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  constructor(props: CallbackButtonProps) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render(): JSX.Element {
    const { className, children, bouncing, formTarget } = this.props;
    return (
      <>
        <CallbackModal visible={this.state.isModalVisible} onModalClose={this.closeModal} formTarget={formTarget} />

        <Button type="button" bouncing={bouncing} className={className} onClick={this.openModal}>
          {children}
        </Button>
      </>
    );
  }
}