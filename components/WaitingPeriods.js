import styles from "../styles/Section.module.css";

const WaitingPeriods = (props) => {
  const state = props.state;

  const stateDataExists = JSON.stringify(props.stats) === "{}" ? false : true;

  if (stateDataExists) {
    //IF THE STATE DATA EXISTS FROM THE WAITING PERIODS TABLE, DEFINE DESTRUCTURE TARGETDATA

    const targetData = props.stats[state];

    const waitingPeriod = targetData.waiting_period_hours
      ? targetData.waiting_period_hours
      : "No waiting period is in effect";

    const counseling_visits = targetData.counseling_visits
      ? targetData.counseling_visits
      : null;

    const numOfCounselingVisits = () => {
      switch (counseling_visits) {
        case "1":
          return "Abortion counseling session required by the state, which typically covers information about the abortion procedure and fetal development.";
        case "2":
          return "Abortion counseling or ultrasound must be obtained at the facility before the waiting period begins, requiring two trips to the clinic.";
        default:
          return "No counseling required.";
      }
    };

    return (
      <div className={styles.data_wrapper}>
        <div className={styles.label}>
          The state-mandated waiting period (number of hours someone must wait
          to obtain an abortion after receiving state-mandated abortion
          counseling):
        </div>
        <div className={styles.answer}>
          {waitingPeriod} hours—waived in a medical emergeny or when a pregnant
          person&apos;s health or life is threatened.
        </div>

        <div className={styles.label}>What counseling is required?</div>
        <div className={styles.answer}>
          {numOfCounselingVisits()}

          <p>
            Individual states determine what material is covered during the
            abortion counseling sessions.
          </p>

          <p>
            Some states mandate a pregnant person receive written materials.
          </p>

          <p>
            As of August 2022, 30 states require the gestational age of the
            fetus be disclosed during counseling. Twelve states require
            counseling cover information on the fetus's ability of a to feel
            pain, according to the Guttmacher Institute. Five states require
            that patients be told that personhood begins at conception. This
            information may be considered misleading.
            [https://www.guttmacher.org/state-policy/explore/counseling-and-waiting-periods-abortion#:~:text=Nearly%20all%20the%20states%20that,about%20all%20common%20abortion%20procedures.]
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Many states require a pregnant person to attend a counseling session
          and waiting a designated amount of time before obtaining an abortion.
        </p>
        <p>
          {state} does not require you to attend a counseling session or go
          through a waiting period before getting an abortion.
        </p>
      </div>
    );
  }
};

export default WaitingPeriods;
