import { Component, DOMAttributes } from 'react';
import Utils from 'utils/utils';
import { CallbackModal } from 'components/common/Modal';

interface PhoneLinkProps {
  phoneForLink: string;
  className?: string;
}

interface PhoneLinkState {
  isModalVisible: boolean;
}

export default class PhoneLink extends Component<PhoneLinkProps, PhoneLinkState> {
  private onClick: DOMAttributes<HTMLAnchorElement>['onClick'] = e => {
    if (Utils.getScreenWidth() > Utils.DEVICE_WIDTHS.PHONE) {
      e.preventDefault();
      this.setState({ isModalVisible: true });
    }
  };

  onModalClose = () => {
    this.setState({ isModalVisible: false });
  };

  constructor(props: PhoneLinkProps) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render() {
    const { phoneForLink, className, children } = this.props;
    return (
      <>
        <CallbackModal visible={this.state.isModalVisible} onModalClose={this.onModalClose} />
        <a href={`tel:${phoneForLink}`} className={className} onClick={this.onClick}>{children}</a>
      </>
    );
  }
}