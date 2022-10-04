import styles from "./Card.module.css";

const Card = ({ mobileView, card }) => {
  return (
    <div
      className={
        mobileView ? styles.mobile_card_wrapper : styles.desk_card_wrapper
      }
    >
      <img
        className={mobileView ? styles.mobile_img : styles.desk_img}
        src={card.image}
        alt={`description_${card.id}`}
      />
      <p className={mobileView ? styles.mobile_text : styles.desk_text}>
        {card.text}
      </p>
    </div>
  );
};

export default Card;
