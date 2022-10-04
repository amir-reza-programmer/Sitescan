import styles from "./Descriptions.module.css";
import descriptionCards from "../../../data_information/descriptionCards";
import Card from "./../AboutUsPage/common/Card";

const Descriptions = ({ mobileView }) => {
  return (
    <div
      className={
        mobileView ? styles.mobile_descriptions : styles.desk_descriptions
      }
    >
      {descriptionCards.map((card) => (
        <Card key={card.id} mobileView={mobileView} card={card} />
      ))}
    </div>
  );
};

export default Descriptions;
