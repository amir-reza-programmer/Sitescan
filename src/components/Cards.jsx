import styles from "./Cards.module.css";

import CardsData from "./texts/cards/Cards";
import Card from "./common/Card";

const Cards = () => {
  const showCards = (begin, end) => {
    return CardsData.slice(begin, end).map((card) => (
      <Card
        key={card.id}
        title={card.title}
        image={card.image}
        description={card.description}
        colors={card.colors}
      />
    ));
  };

  return (
    <section className={styles.cards}>
      <div className={styles.cards__top}>{showCards(0, 3)}</div>
      <div className={styles.cards__bottom}>{showCards(3, 5)}</div>
    </section>
  );
};

export default Cards;
