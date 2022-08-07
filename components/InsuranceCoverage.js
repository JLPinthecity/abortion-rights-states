import styles from "../styles/Section.module.css";

const InsuranceCoverage = (props) => {
  const state = props.state;

  const targetData = props.stats[state];

  // debugger;

  const requiresCoverage = targetData.requires_coverage
    ? targetData.requires_coverage
    : null;

  const privateCoverage = targetData.private_coverage_no_restrictions
    ? targetData.private_coverage_no_restrictions
    : null;

  const privateLifeException = targetData.private_exception_life
    ? targetData.private_exception_life
    : null;

  const private_exception_health = targetData.private_exception_health
    ? targetData.exception_health
    : null;

  const privateHealthException = () => {
    switch (private_exception_health) {
      case "major bodily function":
        return "This state allows private insurance coverage when the pregnant person's faces a 'substantial and irreversible impairment of a major bodily function.'";
      default:
        return "No exceptions for serious health conditions specified.";
    }
  };

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.subsection}>
        <div className={styles.label}>
          Abortion coverage by private health plans regulated by state:
        </div>

        <div className={styles.answer}>
          {requiresCoverage
            ? "Private health plans regulated by the state are required to cover abortions. This regulation does not apply to self-insured plans (regulated at the federal versus state-level)."
            : "This state does not have require abortion coverage by private health plans regulated by state."}
        </div>

        <div className={styles.label}>
          <b>
            Can private insurance cover abortions despite not being required to?
          </b>
        </div>
        <div className={styles.answer}>
          {privateCoverage
            ? "Private insurance may cover abortion but not necessarily required to."
            : "This state does not have require coverage. Private insurance does not cover abortion."}
        </div>

        <div>
          <h3 className={styles.label}>
            <i>EXCEPTIONS TO ABORTION COVERAGE RESTRICTIONS</i>
          </h3>

          <div className={styles.label}>Life-saving exemption:</div>

          <div className={styles.answer}>
            {privateLifeException
              ? "This state allows private insurance coverage for cases where abortion is necessary to save the pregnant person's life."
              : "No life-saving exemption"}
          </div>

          <div className={styles.label}>
            Exemption for a serious health condition:
          </div>

          <div className={styles.answer}>{privateHealthException()}</div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCoverage;

// exchange_coverage_no_restrictions: true
// medicaid_coverage_provider_patient_decision: true
// medicaid_exception_life: true
// requires_coverage: true
