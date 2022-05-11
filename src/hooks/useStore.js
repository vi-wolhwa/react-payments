import { useEffect, useState, useMemo } from 'react';
import store from '../store/store';
import { removeCrucialCardInfo } from '../utils/commons';

const useStore = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const savedCardList = store.load() || [];
    const safeCardInfoList = savedCardList.map((card) =>
      removeCrucialCardInfo(card)
    );

    setCardList(safeCardInfoList);
  }, []);

  const cardsApi = useMemo(
    () => ({
      cardList,
      addCard: (cardInfo) => {
        const newCard = { ...cardInfo, id: new Date().valueOf() };
        const safeCardInfo = removeCrucialCardInfo(newCard);

        store.post(newCard);
        setCardList((prevCardList) => [...prevCardList, safeCardInfo]);

        return safeCardInfo;
      },
      updateCard: (id, updatedCardInfo) => {
        store.patch(id, updatedCardInfo);

        setCardList((prevCardList) => {
          const clonedCardList = [...prevCardList];
          const index = clonedCardList.findIndex((card) => card.id === id);
          const safeCardInfo = removeCrucialCardInfo(updatedCardInfo);

          clonedCardList[index] = {
            ...clonedCardList[index],
            ...safeCardInfo,
          };

          return clonedCardList;
        });
      },
    }),
    [cardList]
  );

  return cardsApi;
};

export default useStore;