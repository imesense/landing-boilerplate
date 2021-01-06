import { Modal } from 'components/common';
import { Component, Fragment } from 'react';
import styles from './PolicyModal.module.scss';

interface PolicyModalProps {
  visible: boolean;
  onClose: () => void;
}

export class PolicyModal extends Component<PolicyModalProps> {
  private static readonly POLICY_DATA = {
    lastChange: '',
    orgName: '',
    inn: '',
    bankName: '',
    ratedBill: '',
    contBill: '',
    bik: '',
    ceo: '',
    siteAddress: '',
    siteAdmin: '',
  };

  private getDataPart = (key: string, i: number): JSX.Element => {
    if (!PolicyModal.POLICY_DATA[key]) {
      return <Fragment key={i}></Fragment>;
    }

    let label: string;

    switch (key) {
      case 'inn':
        label = 'ИНН';
        break;
      case 'ogrn':
        label = 'ОГРН';
        break;
      case 'bankName':
        label = 'Наименование банка';
        break;
      case 'ratedBill':
        label = 'Р/c';
        break;
      case 'contBill':
        label = 'К/c';
        break;
      case 'bik':
        label = 'БИК';
        break;
      case 'ceo':
        label = 'Генеральный директор';
        break;
      default:
        label = '';
    }

    return (
      <Fragment key={i}>
        <br />
        {label}: {PolicyModal.POLICY_DATA[key]}
      </Fragment>
    );
  };

  render() {
    const { visible, onClose } = this.props;
    const { lastChange, orgName, siteAddress, siteAdmin } = PolicyModal.POLICY_DATA;

    return(
      <Modal visible={visible} onClose={onClose} className={styles.PolicyModal}>
        <p>Дата последнего изменения: {lastChange}</p>

        <p className={styles['PolicyModal__org-name']}>{orgName}</p>

        <p>
          {
            ['inn', 'ogrn', 'bankName', 'ratedBill', 'contBill', 'bik', 'ceo']
              .map((key, i) => this.getDataPart(key, i))
          }
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>1. Основные понятия</h5>
            
        <p>
          1.1 <b>Сайт</b> - сайт компании {orgName}, расположенный в сети Интернет по адресу: {siteAddress}.
          <br />
          1.2. <b>Администрация сайта</b> - {siteAdmin}.
          <br />
          1.3. <b>Пользователь</b> -  физическое или юридическое лицо, разместившее свою персональную информацию посредством Формы обратной связи на сайте с последующей целью передачи данных Администрации Сайта.
          <br />
          1.4. <b>Персональные данные</b> - ФИО, e-mail, телефон, и др., данные, которые передаются Пользователем Администрации Сайта с согласия Пользователя.
          <br />
          1.5. <b>Форма обратной связи</b> -  специальная форма, где Пользователь размещает свои Персональные данные с целью их передачи Администрации Сайта.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>2. Общие положения</h5>
            
        <p>
          2.1. Настоящая Политика конфиденциальности является официальным типовым документом Администрации Сайта и определяет порядок обработки и защиты информации о физических и юридических лицах, использующих Форму обратной связи на Сайте.
          <br />
          2.2. Целью настоящей Политики конфиденциальности является обеспечение надлежащей защиты информации о Пользователе, в т.ч. его Персональных данных от несанкционированного доступа и разглашения.
          <br />
          2.3. Отношения, связанные со сбором, хранением, распространением и защитой информации о пользователях регулируются настоящей Политикой конфиденциальности и действующим законодательством Российской Федерации.
          <br />
          2.4. Действующая редакция Политики конфиденциальности, является публичным документом, разработана Администрацией Сайта и доступна любому Пользователю сети Интернет при переходе по гипертекстовой ссылке {siteAdmin} и нажатию на ссылку "Политика конфиденциальности" в нижней части сайта или в любой Форме обратной связи.
          <br />
          2.5. Администрация Сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
          <br />
          2.6. Новая Политика конфиденциальности вступает в силу с момента её размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.
          <br />
          2.7. При внесении изменений в Политику конфиденциальности, Администрация Сайта уведомляет об этом Пользователя путём размещения новой редакции Политики конфиденциальности на Сайте.
          <br />
          2.8. Используя Форму обратной связи, Пользователь выражает свое согласие с условиями настоящей Политики конфиденциальности.
          <br />
          2.9. Администрация Сайта не проверяет достоверность получаемой (собираемой) информации о Пользователе.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>
          3. Условия и цели сбора и обработки персональных данных пользователей
        </h5>
            
        <p>
          3.1. Передача Персональных данных Пользователем Администрации Сайта, через Форму обратной связи означает согласие Пользователя на передачу его Персональных данных.
          <br />
          3.2. Администрация Сайта осуществляет обработку информации о Пользователе, в т.ч. его Персональных данных, а также дополнительной информации о Пользователе, предоставляемой им по своему желанию в целях выполнения обязательств перед Пользователем Сайта.
          <br />
          3.3. Обработка Персональных данных осуществляется на основе принципов:
          <br />
          - а) законности целей и способов обработки персональных данных и добросовестности;
          <br />
          - б) соответствия целей обработки Персональных данных целям, заранее определенным и заявленным при сборе персональных данных;
          <br />
          - в) соответствия объёма и характера обрабатываемых Персональных данных способам обработки Персональных данных и целям обработки Персональных данных;
          <br />
          г) недопустимости объединения созданных для несовместимых между собой целей баз данных, содержащих Персональные данные.
          <br />
          3.4. Администрация Сайта осуществляет обработку Персональных данных Пользователя с его согласия в целях оказания услуг/продажи товаров, предлагаемых на Сайте.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>4. Хранение и использование персональных данных</h5>
            
        <p>
          Персональные данные Пользователя хранятся исключительно на электронных носителях и используются строго по назначению, оговоренному в п.3 настоящей Политики конфиденциальности.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>5. Передача персональных данных</h5>
            
        <p>
          5.1. Персональные данные Пользователя не передаются каким-либо третьим лицам, за исключением случаев, прямо предусмотренных настоящей Политикой конфиденциальности.
          <br />
          5.2. Предоставление Персональных данных Пользователя по запросу государственных органов, органов местного самоуправления осуществляется в порядке, предусмотренном законодательством Российской Федерации.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>6. Сроки хранения и уничтожение персональных данных</h5> 

        <p>
          6.1. Персональные данные Пользователя хранятся на электронном носителе сайта бессрочно.
          <br />
          6.2. Персональные данные Пользователя уничтожаются при желании самого пользователя на основании его обращения, либо по инициативе Администратора сайта без объяснения причин путём удаления Администрацией Сайта информации, размещённой Пользователем.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>7. Права и обязанности пользователей</h5>
            
        <p>
          Пользователи вправе на основании запроса получать от Администрации Сайта информацию, касающуюся обработки его Персональных данных.
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>8. Меры по защите информации о пользователях</h5>
            
        <p>
          Администратор Сайта принимает технические и организационно-правовые меры в целях обеспечения защиты Персональных данных Пользователя от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.  
        </p>

        <h5 className={styles['PolicyModal__sub-title']}>9. Обращения пользователей</h5>
            
        <p>
          9.1. Пользователь вправе направлять Администрации Сайта свои запросы, в т.ч. относительно использования/удаления его Персональных данных, предусмотренные п.3 настоящей Политики конфиденциальности в письменной форме по адресу, указанному в п.1.
          <br />
          9.2. Запрос, направляемый Пользователем, должен содержать следующую информацию:
          <br />
          для физического лица:
          <br />
          – номер основного документа, удостоверяющего личность Пользователя или его представителя;
          <br />
          – сведения о дате выдачи указанного документа и выдавшем его органе;
          <br />
          – дату регистрации через Форму обратной связи;
          <br />
          – текст запроса в свободной форме;
          <br />
          – подпись Пользователя или его представителя.
          <br />
          для юридического лица:
          <br />
          – запрос в свободной форме на фирменном бланке;
          <br />
          – дата регистрации через Форму обратной связи;
          <br />
          – запрос должен быть подписан уполномоченным лицом с приложением документов, подтверждающих полномочия лица.
          <br />
          9.3. Администрация Сайта обязуется рассмотреть и направить ответ на поступивший запрос Пользователя в течение 30 дней с момента поступления обращения.
          <br />
          9.4. Вся корреспонденция, полученная Администрацией от Пользователя (обращения в письменной/электронной форме) относится к информации ограниченного доступа и без письменного согласия Пользователя разглашению не подлежит. Персональные данные и иная информация о Пользователе, направившем запрос, не могут быть без специального согласия Пользователя использованы иначе, как для ответа по теме полученного запроса или в случаях, прямо предусмотренных законодательством.
        </p>
            
        <h5 className={styles['PolicyModal__sub-title']}>10. Разрешение споров</h5>
            
        <p>
          10.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта и Администрацией сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).
          <br />
          10.2 Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.
          <br />
          10.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Российской Федерации.
          <br />
          10.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.
        </p>
      </Modal>
    );
  }
}