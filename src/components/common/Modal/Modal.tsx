import { Component } from 'react';
import Dialog from 'rc-dialog';
import IDialogPropTypes from 'rc-dialog/lib/IDialogPropTypes';

interface ModalProps {
  visible: boolean;
  onClose: IDialogPropTypes['onClose'];
  hasClose?: boolean;
  className?: string;
}

export default class Modal extends Component<ModalProps> {
  static defaultProps: Partial<ModalProps> = { hasClose: true };
  
  render() {
    const { visible, children, onClose, hasClose, className } = this.props;

    return(
      <Dialog visible={visible} onClose={onClose} closable={hasClose} className={className}>
        {children}
      </Dialog>
    );
  }
}