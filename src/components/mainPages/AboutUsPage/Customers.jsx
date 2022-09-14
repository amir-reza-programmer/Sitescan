import customers from "../../../data_information/customers";

import styles from "./Customers.module.css";

const Customers = () => {
  return (
    <section className={styles.customer_section}>
      <p className={styles.title}>مشتریان ما</p>
      <div className={styles.customers}>
        {customers.map((customer) => (
          <img key={customer.id} src={customer}></img>
        ))}
      </div>
    </section>
  );
};

export default Customers;
