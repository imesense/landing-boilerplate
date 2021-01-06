import { Component, DOMAttributes } from 'react';
import Utils from 'utils/utils';
import { CallbackModal } from 'components/common/Modal';

interface ModalLinkProps {
  className?: string;
  formTarget: string;
}

interface ModalLinkState {
  isModalVisible: boolean;
}

export class ModalLink extends Component<ModalLinkProps, ModalLinkState> {
  private onClick: DOMAttributes<HTMLAnchorElement>['onClick'] = e => {
    if (Utils.getScreenWidth() > Utils.DEVICE_WIDTHS.PHONE) {
      e.preventDefault();
      this.setState({ isModalVisible: true });
    }
  };

  onModalClose = () => {
    this.setState({ isModalVisible: false });
  };

  constructor(props: ModalLinkProps) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render() {
    const { className, children, formTarget } = this.props;
    return (
      <>
        <CallbackModal 
          visible={this.state.isModalVisible} 
          onModalClose={this.onModalClose} 
          formTarget={formTarget} 
        />
        
        <a href="#" className={className} onClick={this.onClick}>{children}</a>
      </>
    );
  }
}