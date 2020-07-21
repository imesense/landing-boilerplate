import Modal from './Modal';

interface SuccessRequestModalProps {
  visible: boolean;
}

export default function SuccessRequestModal({ visible }: SuccessRequestModalProps) {
  return(
    <Modal hasClose={true} visible={visible}>
      Ваша заявка успешно отправлена!
      <br />
      Наш менеджер свяжется с вами в ближайшее время!
    </Modal>
  );
}