import styles from "../styles/Section.module.css";

const Minors = (props) => {
  console.log("from minors component", props);
  const state = props.state;

  const targetData = props.stats[state];

  const ageOfRestrictions = targetData.below_age;

  //boolean
  const parental_consent_required = targetData.parental_consent_required
    ? targetData.parental_consent_required
    : null;

  //boolean
  const parental_notification_required =
    targetData.parental_notification_required
      ? targetData.parental_notification_required
      : null;

  const parents_required = targetData.parents_required;

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

  //boolean
  const allows_minor_to_consent = targetData.allows_minor_to_consent
    ? targetData.allows_minor_to_consent
    : null;

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.label}>Age below which restrictions apply:</div>

      <div className={styles.answer}>
        Restrictions apply to minors under {ageOfRestrictions} years old.
      </div>

      <div className={styles.label}>Parental consent requirement:</div>
      <div className={styles.answer}>
        {parental_consent_required
          ? "In this state, parental consent (from a parent or parents) is required for a minor to have an abortion."
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

      <div className={styles.label}>
        State has explicitly granted a minor the ability to consent to an
        abortion (through a law) or implicitly (no law expressly requires
        parental involvement or parently involvement has been struck down in
        court):
      </div>

      <div className={styles.answer}>
        {allows_minor_to_consent ? "True" : "False"}
      </div>
    </div>
  );
};

export default Minors;
