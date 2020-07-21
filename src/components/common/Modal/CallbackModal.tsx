import { Form, Field, Modal } from 'components/common';
import { Component, ChangeEvent } from 'react';
import Utils from 'utils/utils';

interface CallbackModalProps {
  visible: boolean;
  onModalClose: () => void;
  formTarget?: string;
}

interface CallbackModalState {
  name?: string;
  phone?: string;
}

export default class CallbackModal extends Component<CallbackModalProps, CallbackModalState> {
  private onFieldChange = 
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof CallbackModalState) => 
      this.setState({ [field]: e?.target?.value });

  private getFormValue = (): Partial<CallbackModalState> => 
    Utils.getFormValueFromState(this.state || {}, ['name', 'phone'], { name: 'Имя', phone: 'Телефон' });

  constructor(props: CallbackModalProps) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
  }

  onSubmit = () => {
    this.props.onModalClose();
  };

  render(): JSX.Element {
    const { visible, onModalClose } = this.props;
    return (
      <Modal visible={visible} onClose={onModalClose}>
        <Form 
          submitLabel="Оставить заявку" 
          desc={<><b>Оставьте заявку</b> в форме ниже, и наш менеджер свяжется с вами в течение рабочего дня</>}
          formValue={this.getFormValue()}
          afterSuccessSubmit={this.onSubmit}
          formTarget={this.props.formTarget}
        >
          <Field 
            type="text" 
            placeholder="Введите ваше имя" 
            name="Имя" 
            value={this.state.name} 
            onChange={e => this.onFieldChange(e, 'name')}
          />

          <Field 
            type="phone" 
            placeholder="Введите ваш телефон" 
            name="Телефон" 
            value={this.state.phone} 
            onChange={e => this.onFieldChange(e, 'phone')}
          />
        </Form>
      </Modal>
    );
  }
}