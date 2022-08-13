import styles from "../styles/Section.module.css";
import React, { useState } from "react";
import PrivateInsurance from "./PrivateInsurance";

const InsuranceCoverage = (props) => {
  const state = props.state;

  const targetData = props.stats[state];

  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    return setShowMore(!showMore);
  };

  const getStyle = () => {
    if (showMore) return styles.showContent;
    else return styles.hideContent;
  };

  // EXCHANGE PLANS
  const exchange_exception_health = targetData.exchange_exception_health
    ? targetData.exchange_exception_health
    : null;

  const exchange_exception_fetal = targetData.exchange_exception_fetal
    ? targetData.exchange_exception_fetal
    : null;

  const exchange_exception_rape_or_incest =
    targetData.exchange_exception_rape_or_incest
      ? targetData.exchange_exception_rape_or_incest
      : null;

  const exchange_coverage_no_restrictions =
    targetData.exchange_coverage_no_restrictions
      ? targetData.exchange_coverage_no_restrictions
      : null;

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

  const exchange_forbids_coverage = targetData.exchange_forbids_coverage
    ? targetData.exchange_forbids_coverage
    : null;

  // MEDICAID

  //wrap content that has "medicaid_coverage_provider_patient_decision": true
  //and say it's true + no not show exceptions
  //show exceptions if false

  const medicaid_coverage_provider_patient_decision =
    targetData.medicaid_coverage_provider_patient_decision
      ? targetData.medicaid_coverage_provider_patient_decision
      : null;

  // MEDICAID EXCEPTIONS
  const medicaid_exception_life = targetData.medicaid_exception_life
    ? targetData.medicaid_exception_life
    : null;

  const medicaid_exception_health = targetData.medicaid_exception_health;

  const medicaidExceptionHealth = () => {
    switch (medicaid_exception_health) {
      case "physical":
        return "This state allows Medicaid  coverage of abortion when the pregnant person's physical health is endangered. (This is a requirement of the Hyde amendment.)";
      default:
        return "No exceptions for serious health conditions specified.";
    }
  };

  const medicaid_exception_fetal = targetData.medicaid_exception_fetal;

  const medicaidExceptionFetal = () => {
    switch (medicaid_exception_fetal) {
      case "Serious fetal anomaly":
        return "This state allows Medicaid  coverage of abortion when the fetus has a serious or lethal fetal anomaly.";
      default:
        return "No exception for fetal anomaly.";
    }
  };

  const medicaid_exception_rape_or_incest =
    targetData.medicaid_exception_rape_or_incest
      ? targetData.medicaid_exception_rape_or_incest
      : null;

  const onToggle = () => {
    return true ? true : false;
  };

  return (
    <div className={styles.data_wrapper}>
      <PrivateInsurance state={state} targetData={targetData} />

      <section className={styles.accordian}>
        <div className={styles.insurance_type}>
          State marketplace insurance plans
        </div>
        <span onClick={() => toggle()}>{showMore ? "-" : "+"}</span>

        <div className={getStyle()}>
          <div className={styles.label}>
            Does this state prohibit any and all exchange insurance coverage for
            abortion?
          </div>
          <div className={styles.answer}>
            {exchange_forbids_coverage
              ? "Yes, this state prohibits any and all exchange insurance coverage of abortion."
              : "No, this state does not explicitly forbid any and all exchange insurance coverage of abortion."}
          </div>

          <div className={styles.label}>
            Are there restrictions on abortion coverage with health plans
            offered in the state&apos;s Health Care Exchange?
          </div>
          <div className={styles.answer}>
            {exchange_coverage_no_restrictions
              ? "There are no restrictions on abortion coverage in Affordable Care Act plans. **However, a lack of restrictions does not mean every plan available through the Health Insurance Marketplace® (also known as the “Marketplace” or “exchange”) will cover abortion procedures."
              : "Restricted abortion coverage in ACA plans."}
          </div>

          {!exchange_coverage_no_restrictions && (
            <div className={styles.exceptions}>
              <h3 className={styles.secondary_label}>
                <i>
                  EXCEPTIONS TO ABORTION-COVERAGE RESTRICTIONS ON STATE
                  MARKETPLACE PLANS:
                </i>
              </h3>

              <div className={styles.label}>Life-saving exception:</div>

              <div className={styles.answer}>
                {exchange_exception_life
                  ? "Despite restrictions, this state allows ACA plans to cover abortion when it's necessary to save the pregnant person's life."
                  : "No life-saving exemption"}
              </div>

              <div className={styles.label}>
                Serious health condition exception:
              </div>

              <div className={styles.answer}>{exchangeExceptionHealth()}</div>

              <div className={styles.label}>
                Lethal fetal anomaly Exception:
              </div>

              <div className={styles.answer}>{exchangeFetalException()}</div>

              <div className={styles.label}>RAPE OR INCEST Exception:</div>
              <div className={styles.answer}>
                {exchange_exception_rape_or_incest
                  ? "This state allows ACA plans to cover abortion when a pregnancy is a result of rape or incest."
                  : "No rape or incest exception."}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.accordian}>
        <div className={styles.insurance_type}>Medicaid </div>

        <span onClick={() => toggle()}>{showMore ? "-" : "+"}</span>

        <div className={getStyle()}>
          <div className={styles.label}>
            Does this state have a policy in place to use Medicaid funds to
            cover abortion?
            <br></br>(Most policies require coverage for &quot;medically
            necessary&quot; abortion at the discretion of the pregnant person
            and their medical provider.)
          </div>
          <div className={styles.answer}>
            {medicaid_coverage_provider_patient_decision
              ? "Yes, this state has a policy in place to use Medicaid funds to pay for abortion."
              : "No, this state does not have a policy in place for Medicaid funds to cover abortion."}
          </div>
          {!medicaid_coverage_provider_patient_decision && (
            <div className={styles.exceptions}>
              <h3 className={styles.secondary_label}>
                <i>EXCEPTIONS TO MEDICAID ABORTION-COVERAGE RESTRICTIONS:</i>
              </h3>

              <div className={styles.label}>Life-saving exception:</div>

              <div className={styles.answer}>
                {medicaid_exception_life
                  ? "The state allows Medicaid insurance to cover abortion when it's necessary to save the pregnant person's life. (This is required by the Hyde amendment.)"
                  : "No life-saving exemption"}
              </div>

              <div className={styles.label}>Physical health exception:</div>
              <div className={styles.answer}>{medicaidExceptionHealth()}</div>

              <div className={styles.label}>
                SERIOUS FETAL ANOMALY EXCEPTION:
              </div>

              <div className={styles.answer}>{medicaidExceptionFetal()}</div>

              <div className={styles.label}>RAPE OR INCEST Exception:</div>
              <div className={styles.answer}>
                {medicaid_exception_rape_or_incest
                  ? "This state allows Medicaid insurance coverage for cases where pregnancy is a result of rape or incest. (This is required by the Hyde amendment)."
                  : "No rape or incest exception."}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InsuranceCoverage;
