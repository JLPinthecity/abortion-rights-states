import styles from "../styles/Section.module.css";

const GestationalLimits = (props) => {
  const state = props.state;

  const stateDataExists = JSON.stringify(props.stats) === "{}" ? false : true;

  if (stateDataExists) {
    const targetData = props.stats[state];

    const banned = targetData.banned_after_weeks_since_LMP
      ? targetData.banned_after_weeks_since_LMP
      : null;

    const bans = () => {
      switch (banned) {
        case 28:
          console.log("test 28");
          return "Ban in the third trimester, which starts in week 28";
        case 99:
          return "Bans after fetal viability (when a fetus can survive outside the womb)";
        case null:
          return "Abortion is banned in this state";
        default:
          return `${banned} weeks since Last Menstrual Period (LMP)`;
      }
    };

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

    const distinction_to_life_saving_exemption = () => {
      switch (exception_health) {
        case "Physical":
          return "Abortion is allowed to preserve the pregnant person's life. Specifically, physical health (excluding mental health).";
        case "Any":
          return "Abortion is allowed to preserve the pregnant person's life. There is no distinction made between physical and mental health.";
        case "Major Bodily Function":
          return "Abortion is allowed to preserve the pregnant person's life. Abortion is allowed in cases where a pregnant person would suffer substantial and irreversible impairment of a major bodily function. May include mental health.";
        case null:
          return "No distinctions specified";
        default:
          return "DEFAULT CASE";
      }
    };

    const fetal_health_exemption = () => {
      switch (exception_health) {
        case "Serious fetal anomaly":
          return "Abortion is allowed based on the health or status of the fetus. Exceptions are in place for serious fetal anomalites.";
        case "Lethal fetal anomaly":
          return "Abortion is allowed based on the health or status of the fetus. Exceptions in place for lethal fetal anomalites.";
        default:
          return "No exceptions for fetal anomalies specified";
      }
    };

    return (
      <div className={styles.data_wrapper}>
        <div className={styles.subsection}>
          <div className={styles.label}>
            Gestational limit imposed by state (varying legal language
            normalized as weeks since last menstrual period (LMP)):
          </div>

          <div className={styles.answer}>{bans() ? `${bans()}` : "RUH-OH"}</div>

          <div className={styles.label}>LIFE-SAVING EXCEPTION:</div>
          <div className={styles.answer}>
            {exception_life
              ? "Abortion is allowed if necessary to save a pregnant person's life."
              : "No life-saving exception in place."}
          </div>

          <div className={styles.label}>
            DISTINCTIONS MADE TO LIFE-SAVING EXCEPTION:
          </div>
          <div className={styles.answer}>
            {distinction_to_life_saving_exemption()}
          </div>

          <div className={styles.label}>RAPE OR INCEST EXCEPTION:</div>
          <div className={styles.answer}>
            {exception_rape_or_incest
              ? "Abortion is allowed in cases of rape or incest."
              : "No rape and incest exception specified"}
          </div>

          <div className={styles.label}>LETHAL FETAL ANOMALY EXCEPTION:</div>
          <div className={styles.answer}>{fetal_health_exemption()}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.answer}>
        <p>
          Abortion is legal at all stages in {state}. There is no limit on
          abortion in {state} based on the gestational age of fetus.
        </p>
      </div>
    );
  }
};

export default GestationalLimits;
