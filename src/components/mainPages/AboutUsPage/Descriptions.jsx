import styles from "./Descriptions.module.css";
import descriptionCards from "../../../data_information/descriptionCards";
import Card from "./../AboutUsPage/common/Card";

const Descriptions = () => {
  return (
    <div className={styles.descriptions}>
      <div className={styles.top}>
        <h2>
          رسانه های دیجیتال می‌توانند نقشی کلیدی در افزایش کیفیت زندگی انسان ها
          ایفا کنند. ما با توجه و تمرکز بر کسب و کارهای ایرانی وارد این عرصه
          شدیم، به این امید که بتوانیم نقشی کوچک در بهبود و توسعه رسانه های
          دیجیتال فارسی داشته باشیم.
        </h2>
      </div>
      <div className={styles.bottom}>
        {descriptionCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Descriptions;
