import { Complete } from '@assets/images';
import { ConfirmButton } from '@pages/submit';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Submit.module.css';

const Submit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstCardNumber, cardIssuer } = location.state;

  return (
    <div className={styles.submitContainer}>
      <img className={styles.complete} src={Complete} alt="Complete" />
      <p className={styles.message}>
        <span>{`${firstCardNumber}로 시작하는`}</span>
        <br />
        {`${cardIssuer}가 등록되었어요.`}
      </p>
      <ConfirmButton
        label="확인"
        onClickConfirmButton={() => {
          navigate('/');
        }}
      />
    </div>
  );
};

export default Submit;