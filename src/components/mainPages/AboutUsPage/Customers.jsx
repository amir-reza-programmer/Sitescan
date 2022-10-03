import customers from "../../../data_information/customers";

import styles from "./Customers.module.css";

const Customers = () => {
  return (
    <div className={styles.customers_section}>
      <p className={styles.title}>مشتریان ما</p>
      <div className={styles.customers}>
        {customers.map((customer) => (
          <img key={customer.id} src={customer.pic}></img>
        ))}
      </div>
    </div>
  );
};

export default Customers;
