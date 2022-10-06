import MemberCard from "./common/MemberCard";
import { useSelector } from "react-redux";
import teamMembers from "../../../data_information/teamMembers";

import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  return (
    <section className={styles.team_section}>
      <p
        className={styles.title + ` ${mobileView ? styles.title_mobile : null}`}
      >
        اعضای تیم ما
      </p>
      <div
        className={
          mobileView ? styles.team_members_mobile : styles.team_members
        }
      >
        {teamMembers.map((member) => (
          <MemberCard
            mobileView={mobileView}
            key={member.id}
            {...member}
          ></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
