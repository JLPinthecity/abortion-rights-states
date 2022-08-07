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

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.subsection}>
        <div>
          <b>
            Insurance Coverage (abortion restrictions that specifically restrict
            what type of insurance coverage can be used to cover abortion (both
            Medicaid and private insurance))
          </b>
        </div>

        <div>
          <b>Public insurance requires coverage:</b>
        </div>
        <div>
          {requiresCoverage
            ? "If checked, the state requires that require private health plans regulated by the state cover abortion. These requirements do not apply to self-insured plans (in which the employer takes on all the risk, instead of contracting with a health insurer) as self-insured plans are regulated at the federal, not state, level."
            : "This state does not have require coverage."}
        </div>

        <div>
          <b>Private insurance requires coverage:</b>
        </div>
        <div>
          {privateCoverage
            ? "Few states require that private insurance cover abortion. If checked, private insurance may do so, but is not necessarily required to.Private insurance here refers to non-self-insured plans. In self-insured plans, the employer takes on all the risk, instead of contracting with a health insurer; self-insured plans are regulated at the federal, not state, level."
            : "This state does not have require coverage."}
        </div>

        <div>
          <h3> Exceptions:</h3>
          {privateLifeException
            ? "  <b>Life-saving exception:</b> The state allows private insurance coverage for cases where abortion is necessary to save the pregnant person's life."
            : "BLANK FOR LIFE EXCCEPPTION"}
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
