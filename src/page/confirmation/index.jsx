import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAlias from 'hooks/useAlias';
import { CardDispatch } from 'App';

import CardPreview from 'components/CardPreview';
import Button from 'components/common/Button';

import styles from 'css/module/ConfirmationPage.module.css';
import validate from './validator';
import { ACTION, ROUTE } from 'constants';
import { INPUT_MAX_LENGTH } from 'constants';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CardDispatch);
  const { id } = useParams();
  const { theme, company, number, expiryDate, ownerName } = state.cards.find(
    (card) => card.id === id,
  );
  const [alias, isFullFilled, handleAlias] = useAlias();

  const confirmCard = () => {
    try {
      validate(state.cards, alias);

      dispatch({ type: ACTION.SET_ALIAS, alias, id });
      navigate(ROUTE.MAIN);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>카드등록이 완료되었습니다.</p>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
        theme={theme}
      />
      <input
        className={styles.input}
        value={alias}
        onChange={(e) => handleAlias(e.target.value)}
        placeholder="카드 이름"
        maxLength={INPUT_MAX_LENGTH.ALIAS}
        autoFocus
      />
      {isFullFilled && (
        <Button theme={theme} className="next-button" handleClick={confirmCard}>
          다음
        </Button>
      )}
    </div>
  );
};

export default ConfirmationPage;