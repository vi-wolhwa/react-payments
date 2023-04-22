import type { CardInfo } from '../../types/card';

import styles from './card.module.css';

const Card = ({
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  owner,
  expiredMonth,
  expiredYear,
}: CardInfo) => {
  return (
    <div className={styles.container}>
      <svg
        width={31}
        height={24}
        viewBox="0 0 31 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x={0.375}
          y={0.375}
          width={30.25}
          height={22.25}
          rx={3.625}
          fill="#9AA04E"
          stroke="black"
          strokeWidth={0.75}
        />
        <path d="M0 7.75H9.5" stroke="black" strokeWidth={0.5} />
        <path
          d="M21.5 22.5L21 21.0084L20.5 19.5168V18.0252V16.5336L21 15L20.5 12.5559V11.0643V9.57271L21.3333 7.6"
          stroke="black"
          strokeWidth={0.5}
        />
        <path
          d="M9 23L9.5 21.4984L10 19.9968V18.4951L10 16.9935L9.5 15L10 12.9892V11.4876V9.98595L9.5 7.5"
          stroke="black"
          strokeWidth={0.5}
        />
        <path
          d="M9 0.5L10 2.56621L10 4.11627V5.66633L9.5 7.742"
          stroke="black"
          strokeWidth={0.5}
        />
        <path d="M21.1055 7.75H31" stroke="black" strokeWidth={0.5} />
        <path d="M0 14.75H9.75544" stroke="black" strokeWidth={0.5} />
        <path
          d="M10 19.5L12.5 20H15.5L18 20L20.5 19.5"
          stroke="black"
          strokeWidth={0.5}
        />
        <path
          d="M10 3.5L12.5 3L15.5 3L18 3L20.5 3.5"
          stroke="black"
          strokeWidth={0.5}
        />
        <path
          d="M22.5 0.5L21.5 2L20.5 3.5V4.5"
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={21}
          y1={14.75}
          x2={31}
          y2={14.75}
          stroke="black"
          strokeWidth={0.5}
        />
      </svg>
      <div className={`${styles.cardNumber} text-card-number`}>
        <span className={styles.number}>{cardNumber1}</span>
        <span className={styles.number}>{cardNumber2}</span>
        <span className={styles.password}>
          {cardNumber3 !== undefined
            ? '﹒'.repeat(cardNumber3.length)
            : '﹒﹒﹒﹒'}
        </span>
        <span className={styles.password}>
          {cardNumber4 !== undefined
            ? '﹒'.repeat(cardNumber4.length)
            : '﹒﹒﹒﹒'}
        </span>
      </div>
      <div className={styles.detailContainer}>
        <p className="text-card-detail">{owner}</p>
        <p className="text-card-detail">
          {expiredMonth}
          {expiredMonth.length === 2 && <span>/</span>}
          {expiredYear}
        </p>
      </div>
    </div>
  );
};

export default Card;