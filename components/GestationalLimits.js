import styles from "../styles/Section.module.css";

const GestationalLimits = (props) => {
  debugger;
  const state = props.state;

  const targetData = props.stats[state];

  // debugger;

  const banned = targetData.banned_after_weeks_since_LMP
    ? targetData.banned_after_weeks_since_LMP
    : null;

  //boolean
  const exception_life = targetData.exception_life
    ? targetData.exception_life
    : null;

  //boolean
  const exception_rape_or_incest = targetData.exception_rape_or_incest
    ? targetData.exception_rape_or_incest
    : null;

  //three distinctions
  const exception_health = targetData.exception_health
    ? targetData.exception_health
    : null;

  //"Serious fetal anomaly" or "Lethal fetal anomaly" or null
  const fetal_health = targetData.exception_health
    ? targetData.exception_health
    : null;

  const bans = () => {
    switch (banned) {
      case 28:
        console.log("test 28");
        return "Ban in the third trimester, which starts in week 28.";
      case 99:
        return "Bans after fetal viability (when a fetus can survive outside the womb).";
      case null:
        return "Abortion is banned in this state.";
      default:
        return `${banned} weeks since Last Menstrual Period (LMP)`;
    }
  };

  const distinction_to_life_saving_exemption = () => {
    switch (exception_health) {
      case "Physical":
        return "Abortion is not banned to preserve the pregnant person's life. Specifically, physical health (excluding mental health).";
      case "Any":
        return "Abortion is not banned to preserve the pregnant person's life.  No distinctions made. May include mental health.";
      case "Major Bodily Function":
        return "Abortion is not banned to preserve the pregnant person's life. Abortion is allowed in cases  where a pregnant person would suffer substantial and irreversible impairment of a major bodily function. May include mental health.";
      case null:
        return "No distinctions specified";
      default:
        return "DEFAULT CASE";
    }
  };

  const fetal_health_exemption = () => {
    switch (exception_health) {
      case "Serious fetal anomaly":
        return "Abortion is not banned based on the health or status of the fetus. Exceptions in place for serious fetal anomalites versus lethal ones.";
      case "Lethal fetal anomaly":
        return "Abortion is not banned based on the health or status of the fetus. Exceptions in place for lethal fetal anomalites versus serious ones.";
      default:
        return "No exceptions for fetal anomalies specified.";
    }
  };

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.subsection}>
        <div className={styles.label}>
          Gestational limit imposed by state (varying legal language normalized
          as weeks since last menstrual period (LMP)):
        </div>

        <div className={styles.answer}>{bans() ? `${bans()}` : "RUH-OH"}</div>

        <div className={styles.label}>
          IS THERE A LIFE-SAVING EXEMPTION IN PLACE?
        </div>
        <div className={styles.answer}>
          {exception_life
            ? "In this state, abortion allowed if deemed necessary to save a pregnant person's life."
            : "This state does not have life-saving exemptions in place."}
        </div>

        <div className={styles.label}>
          ARE THERE DISTINCTION MADE REGARDING THE LIFE-SAVING EXEMPTION TO THE
          ABORTION BAN?
        </div>
        <div className={styles.answer}>
          {distinction_to_life_saving_exemption()}
        </div>

        <div className={styles.label}>ARE THERE RAPE OR INCEST EXEMPTIONS?</div>
        <div className={styles.answer}>
          {exception_rape_or_incest
            ? "State allow abortion in cases of rape or incest."
            : "This state does not have rape and incest exceptions in place."}
        </div>

        <div className={styles.label}>
          ARE THERE Fetal anomaly exceptions in place?
        </div>
        <div className={styles.answer}>{fetal_health_exemption()}</div>
      </div>
    </div>
  );
};

export default GestationalLimits;
