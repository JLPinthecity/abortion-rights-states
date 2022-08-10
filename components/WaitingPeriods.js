import styles from "../styles/Section.module.css";

const WaitingPeriods = (props) => {
  //   const state = props.state;

  //   const targetData = props.stats[state];

  //boolean
  //   const parental_consent_required = targetData.parental_consent_required
  //     ? targetData.parental_consent_required
  //     : null;

  //boolean
  const parental_notification_required =
    targetData.parental_notification_required
      ? targetData.parental_notification_required
      : null;

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.label}>
        Mandated waiting period (number of hours someone must wait to obtain an
        abortion after receiving state-mandated abortion counseling):
      </div>
      <p>NOTE:</p>Weekends and holidays do not count towards the 72-hour waiting
      period.
      <div className={styles.answer}></div>
      <div className={styles.label}>Requirements:</div>
      <div className={styles.answer}></div>
      <div className={styles.label}>Health exception:</div>
      <div className={styles.answer}></div>
    </div>
  );
};

export default WaitingPeriods;
