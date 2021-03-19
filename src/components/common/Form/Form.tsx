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
  policyLinkPosition?: 'beforeSubmit' | 'afterSubmit' | 'none';
  formTarget?: string;
  file?: File;
  disabled?: boolean;
}

interface FormState {
  loading: boolean;
  isSuccessModalVisible: boolean;
}

export class Form extends Component<FormProps, FormState> {
  static defaultProps: Partial<FormProps> = {
    policyLinkPosition: 'afterSubmit',
  }

  private getSubmitLabel = () => this.state.loading ? 'Отправка...' : this.props.submitLabel;

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { formValue, formTarget, file } = this.props;
    const data = new FormData();

    Object.entries(formValue).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (formTarget) {
      data.append('Цель формы', formTarget);
    }

    if (file) {
      data.append('file', file);
    }

    fetch(
      '/mail/mail-callback.php', 
      { 
        method: 'POST', 
        body: data,
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
          {
            desc
              ? <p className={`${styles.Form__desc} ${descClass || ''}`.trim()}>{desc}</p>
              : null
          }

          {children}

          {policyLinkPosition === 'beforeSubmit' ? <>{policyLink}<br /></> : <></>}

          <Button 
            label={this.getSubmitLabel()} 
            type="submit" 
            className={`${styles.Form__submit} ${submitClass || ''}`.trim()} 
            disabled={this.state.loading || this.props.disabled} 
            bouncing={isSubmitBouncing}
          />
          
          {policyLinkPosition === 'afterSubmit' ? <><br />{policyLink}</> : <></>}
        </form>
      </>
    );
  }
}