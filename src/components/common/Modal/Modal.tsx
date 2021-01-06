import { Component } from 'react';
import Dialog from 'rc-dialog';
import IDialogPropTypes from 'rc-dialog/lib/IDialogPropTypes';

interface ModalProps {
  visible: boolean;
  onClose: IDialogPropTypes['onClose'];
  hasClose?: boolean;
  className?: string;
  width?: number;
}

export class Modal extends Component<ModalProps> {
  static defaultProps: Partial<ModalProps> = { hasClose: true };
  
  render() {
    const { visible, children, onClose, hasClose, className, width } = this.props;

    return(
      <Dialog visible={visible} onClose={onClose} closable={hasClose} className={className} width={width}>
        {children}
      </Dialog>
    );
  }
}