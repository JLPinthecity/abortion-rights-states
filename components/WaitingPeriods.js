import styles from "../styles/Section.module.css";

const WaitingPeriods = (props) => {
  const state = props.state;

  const stateDataExists = JSON.stringify(props.stats) === "{}" ? false : true;

  debugger;

  if (stateDataExists) {
    //IF THE STATE DATA EXISTS FROM THE WAITING PERIODS TABLE, DEFINE DESTRUCTURE TARGETDATA

    targetData = props.stats[state];
    return (
      <div className={styles.data_wrapper}>
        <div className={styles.label}>
          Mandated waiting period (number of hours someone must wait to obtain
          an abortion after receiving state-mandated abortion counseling):
        </div>
        <p>NOTE:</p>Weekends and holidays do not count towards the 72-hour
        waiting period.
        <div className={styles.answer}></div>
        <div className={styles.label}>Requirements:</div>
        <div className={styles.answer}></div>
        <div className={styles.label}>Health exception:</div>
        <div className={styles.answer}></div>
      </div>
    );
  } else {
    return <div>Not applicable</div>;
  }
};

export default WaitingPeriods;
