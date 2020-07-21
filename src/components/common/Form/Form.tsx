import { Component, ReactNode, FormEvent } from 'react';
import { Button, PolicyLink } from 'components/common';
import styles from './Form.module.scss';
import { SuccessRequestModal } from 'components/common';

interface FormProps {
  submitLabel: string;
  desc: ReactNode;
  className?: string;
  afterSuccessSubmit?: () => void;
  formValue: Object;
  descClass?: string;
  submitClass?: string;
  isSubmitBouncing?: boolean;
  policyLinkClass?: string;
  policyLinkPosition?: 'beforeSubmit' | 'afterSubmit';
  formTarget?: string;
}

interface FormState {
  loading: boolean;
  isSuccessModalVisible: boolean;
}

export default class Form extends Component<FormProps, FormState> {
  static defaultProps: Partial<FormProps> = {
    policyLinkPosition: 'afterSubmit',
  }

  private getSubmitLabel = () => this.state.loading ? 'Отправка...' : this.props.submitLabel;

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { formValue, formTarget } = this.props;

    const wholeFormValue = formTarget ? { ...formValue, 'Цель формы': formTarget } : formValue;

    fetch(
      '/mail/mail-callback.php', 
      { 
        method: 'POST', 
        body: Object.keys(wholeFormValue)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(wholeFormValue[k]))
          .join('&'),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
        },
      },
    )
      .finally(() => this.setState({ loading: false }))
      .then(() => {
        if (this.props.afterSuccessSubmit) {
          this.props.afterSuccessSubmit();
        }

        this.setState({ isSuccessModalVisible: true });

        setTimeout(
          () => this.setState({ isSuccessModalVisible: false }), 
          3000,
        );
      })
      .catch(e => {
        this.setState({ loading: false });

        console.log(e);
        alert('Возникла ошибка при отправке по техническим причинам. Пожалуйста, свяжитесь с нами по телефону.');
      });
  }

  constructor(props: FormProps) {
    super(props);

    this.state = { 
      loading: false,
      isSuccessModalVisible: false,
    };
  }

  render() {
    const { 
      className, 
      desc, 
      children, 
      descClass, 
      submitClass, 
      isSubmitBouncing, 
      policyLinkClass,
      policyLinkPosition,
    } = this.props;

    const policyLink = <PolicyLink className={`${styles['Form__policy-link']} ${policyLinkClass || ''}`.trim()} />;

    return(
      <>
        <SuccessRequestModal visible={this.state.isSuccessModalVisible} />

        <form className={`${styles.Form} ${className || ''}`.trim()} onSubmit={this.onSubmit}>
          <p className={`${styles.Form__desc} ${descClass || ''}`.trim()}>{desc}</p>

          {children}

          {policyLinkPosition === 'beforeSubmit' ? <>{policyLink}<br /></> : <></>}

          <Button 
            label={this.getSubmitLabel()} 
            type="submit" 
            className={`${styles.Form__submit} ${submitClass || ''}`.trim()} 
            disabled={this.state.loading} 
            bouncing={isSubmitBouncing}
          />
          
          {policyLinkPosition === 'afterSubmit' ? <><br />{policyLink}</> : <></>}
        </form>
      </>
    );
  }
}