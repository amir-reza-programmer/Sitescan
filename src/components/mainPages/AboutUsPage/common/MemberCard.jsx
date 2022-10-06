import styles from "./MemberCard.module.css";
import Linkedin from "../../../../images/TeamMembres/Linkedin.svg";
import Github from "../../../../images/TeamMembres/Github.svg";

const MemberCard = (props) => {
  const noGithubLink = props.github === "";
  const { mobileView } = props;
  return (
    <section
      className={mobileView ? styles.member_card_mobile : styles.member_card}
    >
      <img
        className={
          styles.member_img + ` ${mobileView ? styles.member_img_mobile : null}`
        }
        src={props.pic}
        alt="profile_pic"
      ></img>
      <div className={styles.info}>
        <p
          className={
            styles.full_name + ` ${mobileView ? styles.text_mobile : null}`
          }
        >
          {props.fullname}
        </p>
        <p
          className={
            styles.position + ` ${mobileView ? styles.text_mobile : null}`
          }
        >
          {props.position}
        </p>
        <div className={mobileView ? styles.links_mobile : styles.links}>
          <a href={props.linkedin}>
            <img src={Linkedin} alt="Linkedin Image"></img>
          </a>
          {!noGithubLink && (
            <a href={props.github}>
              <img src={Github} alt="Github Image"></img>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default MemberCard;
