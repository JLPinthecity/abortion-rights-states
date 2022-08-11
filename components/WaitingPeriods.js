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

    const counseling_waived_condition = targetData.counseling_waived_condition
      ? targetData.counseling_waived_condition
      : "Not applicable";

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

        <div className={styles.label}>Is counseling required?</div>
        <div className={styles.answer}>{numOfCounselingVisits()}</div>

        <div className={styles.label}>Counseling waived condition: </div>
        <div className={styles.answer}>{counseling_waived_condition} </div>
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
