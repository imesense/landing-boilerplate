import { Component } from 'react';
import { Button, ButtonProps } from './Button';
import { CallbackModal } from 'components/common/Modal';

interface CallbackButtonProps extends Pick<ButtonProps, 'className' | 'disabled' | 'bouncing' | 'theme'> {
  formTarget?: string;
}

interface CallbackButtonState {
  isModalVisible: boolean;
}

export class CallbackButton extends Component<CallbackButtonProps, CallbackButtonState> {
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
    const { children, formTarget, ...props } = this.props;
    return (
      <>
        <CallbackModal visible={this.state.isModalVisible} onModalClose={this.closeModal} formTarget={formTarget} />

        <Button {...props} type="button" onClick={this.openModal}>
          {children}
        </Button>
      </>
    );
  }
}