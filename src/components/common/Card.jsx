import styles from "./Card.module.css";

const Card = ({ image, title, description, colors }) => {
  const backgroundStyle = {
    background: `linear-gradient(#013E6A, #013E6A) padding-box,
    linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}) border-box`,
  };
  const titleStyle = {
    background: `-webkit-linear-gradient(left, ${colors[0]}, ${colors[1]})`,
  };
  return (
    <div style={backgroundStyle} className={styles.card}>
      <img className={styles.card__img} src={image} alt={title} />
      <span style={titleStyle} className={styles.card__title}>
        {title}
      </span>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};

export default Card;
