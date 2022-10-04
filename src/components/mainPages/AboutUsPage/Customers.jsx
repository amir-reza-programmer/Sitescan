import customers from "../../../data_information/customers";

import styles from "./Customers.module.css";

const Customers = ({ mobileView }) => {
  return (
    <div className={styles.customers_section}>
      <p className={mobileView ? styles.mobile_title : styles.desk_title}>
        مشتریان ما
      </p>
      <div className={styles.customers}>
        {customers.map((customer) => (
          <img
            className={mobileView ? styles.mobile_img : styles.desk_img}
            key={customer.id}
            src={customer.pic}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Customers;
