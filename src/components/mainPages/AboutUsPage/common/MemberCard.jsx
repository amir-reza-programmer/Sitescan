import styles from "./MemberCard.module.css";
import Linkedin from "../../../../images/TeamMembres/Linkedin.svg";
import Github from "../../../../images/TeamMembres/Github.svg";

const MemberCard = (props) => {
  return (
    <section className={styles.member_card}>
      <img className={styles.member_img} src={props.pic}></img>
      <div className={styles.info}>
        <p className={styles.full_name}>{props.fullname}</p>
        <p className={styles.position}>{props.position}</p>
        <div className={styles.links}>
          <a href={props.linkedin}>
            <img src={Linkedin} alt="Linkedin Image"></img>
          </a>
          <a href={props.github}>
            <img src={Github} alt="Github Image"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MemberCard;
