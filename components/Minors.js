import styles from "../styles/Section.module.css";

const Minors = (props) => {
  const state = props.state;

  const targetData = props.stats[state];

  //DATA FOR ALL 50 STATES EXISTS FROM MINORS DATA TABLE
  //SO CONDITIONAL RENDERING WILL BE FOR WHETHER OR NOT MINORS ARE ALLOWED TO CONSENT TO ABORTION
  //allows_minor_to_consent_to_abortion VALUE

  const minorsAllowedConsent = targetData.allows_minor_to_consent_to_abortion
    ? targetData.allows_minor_to_consent_to_abortion
    : null;

  if (minorsAllowedConsent) {
    return (
      <div className={styles.data_wrapper}>
        <div className={styles.label}>Allows minors to consent:</div>

        <div className={styles.answer}>
          This state either explicitly grants minor adolescents the ability to
          obtain an abortion through the law or implicitly allows minors to
          consent without parental involvement (because no law expressly
          requires parental involvement or because a parental involvement law
          was struck down in the courts).
        </div>
      </div>
    );
  } else {
    //int
    const below_age = targetData.below_age ? targetData.below_age : null;

    // boolean
    const parental_consent_required = targetData.parental_consent_required
      ? targetData.parental_consent_required
      : null;
    //   //boolean

    const parental_notification_required =
      targetData.parental_notification_required
        ? targetData.parental_notification_required
        : null;

    const parents_required = targetData.parents_required
      ? targetData.parents_required
      : null;
    //1, 2, or null
    const num_parents_required = () => {
      switch (parents_required) {
        case 1:
          console.log("test 28");
          return "One parent must be notified. **Many, but not all, states have extended the definition of 'parent' to include other adult guardians.";
        case 2:
          return "Both parents of the minor must be notified. **Many, but not all, states have extended the definition of 'parent' to include other adult guardians.";
        case null:
          return "There are no restrictions on minors' abortions currently being enforced.";
        default:
          return "There are no restrictions on minors' abortions currently being enforced.";
      }
    };

    //boolean
    const judicial_bypass_available = targetData.judicial_bypass_available
      ? targetData.judicial_bypass_available
      : null;

    return (
      <div className={styles.data_wrapper}>
        <div className={styles.label}>
          Age below which restrictions apply in state:
        </div>

        <div className={styles.answer}>{below_age} years old</div>

        <div className={styles.label}>Parental consent requirement:</div>
        <div className={styles.answer}>
          {parental_consent_required
            ? "In this state, parental consent from a parent or parents is required for a minor to obtain an abortion."
            : "Parental consent is not required."}
        </div>

        <div className={styles.label}>Parental notification requirement:</div>
        <div className={styles.answer}>
          {parental_notification_required
            ? "Parental notification must be given. A parent or parents must be told beforehand of the minor's decision to have an abortion."
            : "Parental notification is not mandated."}
        </div>

        <div className={styles.label}>Number of parents:</div>
        <div className={styles.answer}>{num_parents_required()}</div>

        <div className={styles.label}>
          In case a parent or parents cannot be notified, can a minor secure a
          judicial bypass instead?
        </div>

        <div className={styles.answer}>
          {judicial_bypass_available
            ? "A judge can excuse a minor from required parental consent or parental notification requirements. Judicial bypass is typically available in most states with restrictions. In some states, a minor may be excused by a doctor."
            : "Judicial bypass is unavailable or not applicable."}
        </div>
      </div>
    );
  }
};

export default Minors;
