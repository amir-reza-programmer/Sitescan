import styles from "./Cards.module.css";

import CardsData from "../../../data_information/cards";
import Card from "./common/Card";

const Cards = ({ mobileView }) => {
  return (
    <section
      className={
        mobileView ? styles.mobile_cards_section : styles.desk_cards_section
      }
    >
      {CardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          colors={card.colors}
          mobileView={mobileView}
        />
      ))}
    </section>
  );
};

export default Cards;
