import styles from "../styles/Section.module.css";

const WaitingPeriods = (props) => {
  const state = props.state;

  const stateDataExists = JSON.stringify(props.stats) === "{}" ? false : true;

  if (stateDataExists) {
    //IF THE STATE DATA EXISTS FROM THE WAITING PERIODS TABLE, DEFINE DESTRUCTURE TARGETDATA

    const targetData = props.stats[state];

    const waitingPeriod = targetData.waiting_period_hours
      ? targetData.waiting_period_hours
      : null;

    // debugger;

    return (
      <div className={styles.data_wrapper}>
        <div className={styles.label}>
          The state-mandated waiting period (number of hours someone must wait
          to obtain an abortion after receiving state-mandated abortion
          counseling):
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
