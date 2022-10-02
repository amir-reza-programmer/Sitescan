import styles from "./Cards.module.css";

import CardsData from "../../../data_information/cards";
import Card from "./common/Card";

const Cards = () => {
  return (
    <section className={styles.mobile_cards_section}>
        {CardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            colors={card.colors}
          />
        ))}
    </section>
  );
};

export default Cards;
