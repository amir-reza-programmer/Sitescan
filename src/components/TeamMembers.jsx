import MemberCard from "./common/MemberCard";
import teamMembers from "../data_information/teamMembers";

import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
  return (
    <section className={styles.team_section}>
      <p className={styles.title}>اعضای تیم ما</p>
      <div className={styles.team_members}>
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member}></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
