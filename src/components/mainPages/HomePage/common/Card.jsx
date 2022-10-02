import styles from "./Card.module.css";

const Card = ({ image, title, description, colors, mobileView }) => {
  const backgroundStyle = {
    background: `linear-gradient(#013E6A, #013E6A) padding-box,
    linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}) border-box`,
  };
  const titleStyle = {
    background: `-webkit-linear-gradient(left, ${colors[0]}, ${colors[1]})`,
  };
  return (
    <div
      style={backgroundStyle}
      className={mobileView ? styles.mobile_card : styles.desk_card}
    >
      <img
        className={mobileView ? styles.mobile_card_img : styles.desk_card_img}
        src={image}
        alt={title}
      />
      <span
        style={titleStyle}
        className={
          mobileView ? styles.mobile_card_title : styles.desk_card_title
        }
      >
        {title}
      </span>
      <p
        className={
          mobileView
            ? styles.mobile_card_description
            : styles.desk_card_description
        }
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
