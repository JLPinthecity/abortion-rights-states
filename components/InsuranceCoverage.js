import { style } from "@mui/system";
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

  const private_exception_fetal = targetData.private_exception_fetal
    ? targetData.private_exception_fetal
    : null;

  const private_exception_health = targetData.private_exception_health
    ? targetData.exception_health
    : null;

  const exchange_exception_health = targetData.exchange_exception_health
    ? targetData.exchange_exception_health
    : null;

  const exchange_exception_fetal = targetData.exchange_exception_fetal
    ? targetData.exchange_exception_fetal
    : null;

  const privateHealthException = () => {
    switch (private_exception_health) {
      case "major bodily function":
        return "This state allows private insurance coverage when the pregnant person's faces a 'substantial and irreversible impairment of a major bodily function.'";
      default:
        return "No exceptions for serious health conditions specified.";
    }
  };

  const privateFetalException = () => {
    switch (private_exception_fetal) {
      case "Lethal fetal anomaly":
        return "This state allows private insurance coverage when the fetus has a lethal fetal anomaly.";
      default:
        return "No exceptions for lethal fetal anomalies specified.";
    }
  };

  //boolean
  const private_exception_rape_or_incest =
    targetData.private_exception_rape_or_incest
      ? targetData.private_exception_rape_or_incest
      : null;

  //boolean
  const exchange_coverage_no_restrictions =
    targetData.exchange_coverage_no_restrictions
      ? targetData.exchange_coverage_no_restrictions
      : null;

  //STATE MARKETPLACE -- boolean
  const exchange_exception_life = targetData.exchange_exception_life
    ? targetData.exchange_exception_life
    : null;

  //STATE MARKETPLACE -- "major bodily function" or "physical"
  const exchangeExceptionHealth = () => {
    switch (exchange_exception_health) {
      case "major bodily function":
        return "This state allows ACA plan coverage of abortion when the pregnant person's faces a 'substantial and irreversible impairment of a major bodily function.'";
      case "physical":
        return "This state allows ACA plan coverage of abortion when the pregnant person's faces serious impacts on 'physical' health.";
      default:
        return "No exceptions for serious health conditions specified.";
    }
  };

  const exchangeFetalException = () => {
    switch (exchange_exception_fetal) {
      case "Lethal fetal anomaly":
        return "This state allows ACA plans to cover anabortion when the fetus has a lethal fetal anomaly.";
      default:
        return "No exceptions for lethal fetal anomalies specified.";
    }
  };

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.subsection}>
        <div className={styles.insurance_type}>
          Private health insurance plans
        </div>
        <div className={styles.label}>
          Does the state require abortion coverage by private health plans
          regulated by state?
        </div>

        <div className={styles.answer}>
          {requiresCoverage
            ? "Yes, private health plans regulated by the state are required to cover abortions. This regulation does not apply to self-insured plans regulated at the federal versus the state level)."
            : "No, this state does not have require abortion coverage by private health plans regulated by state."}
        </div>

        <div className={styles.label}>
          <b>
            Can private insurance cover abortions despite not being required to?
          </b>
        </div>
        <div className={styles.answer}>
          {privateCoverage
            ? "Private insurance may cover abortion but not necessarily required to."
            : "This state does not have require coverage and private insurance cannot cover abortion."}
        </div>

        <div>
          <h3 className={styles.secondary_label}>
            <i>
              EXCEPTIONS TO PRIVATE HEALTH INSURANCE ABORTION-COVERAGE
              RESTRICTIONS:
            </i>
          </h3>

          <div className={styles.label}>Life-saving exception:</div>

          <div className={styles.answer}>
            {privateLifeException
              ? "This state allows private insurance coverage for cases where abortion is necessary to save the pregnant person's life."
              : "No life-saving exemption"}
          </div>

          <div className={styles.label}>
            Serious health condition exception:
          </div>

          <div className={styles.answer}>{privateHealthException()}</div>

          <div className={styles.label}>Lethal fetal anomaly Exception:</div>

          <div className={styles.answer}>{privateFetalException()}</div>
        </div>

        <div className={styles.label}>RAPE OR INCEST Exception:</div>
        <div className={styles.answer}>
          {private_exception_rape_or_incest
            ? "This state allows private insurance coverage for cases where pregnancy is a result of rape or incest."
            : "No rape or incest exception."}
        </div>

        <div className={styles.insurance_type}>
          State Marketplace insurance plans
        </div>

        <div className={styles.label}>
          Are there restrictions on abortion coverage with health plans offered
          in the state&apos;s Health Care Exchange?
        </div>
        <div className={styles.answer}>
          {exchange_coverage_no_restrictions
            ? "There are no restrictions on abortion coverage in Affordable Care Act plans. **However, a lack of restrictions does not mean every plan available through the Health Insurance Marketplace® (also known as the “Marketplace” or “exchange”) will cover abortion procedures."
            : "Restricted abortion coverage in ACA plans."}
        </div>

        <h3 className={styles.secondary_label}>
          <i>
            EXCEPTIONS TO ABORTION-COVERAGE RESTRICTIONS ON STATE MARKETPLACE
            PLANS:
          </i>
        </h3>

        <div className={styles.label}>Life-saving exception:</div>

        <div className={styles.answer}>
          {exchange_exception_life
            ? "Despite restrictions, this state allows ACA plans to cover abortion when it's necessary to save the pregnant person's life."
            : "No life-saving exemption"}
        </div>

        <div className={styles.label}>Serious health condition exception:</div>

        <div className={styles.answer}>{exchangeExceptionHealth()}</div>

        <div className={styles.label}>Lethal fetal anomaly Exception:</div>

        <div className={styles.answer}>{exchangeFetalException()}</div>
      </div>
    </div>
  );
};

export default InsuranceCoverage;

// exchange_coverage_no_restrictions: true
// medicaid_coverage_provider_patient_decision: true
// medicaid_exception_life: true
// requires_coverage: true
