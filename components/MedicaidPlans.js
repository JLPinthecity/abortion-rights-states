import React, { useState } from "react";
import styles from "../styles/Section.module.css";

const MedicaidPlans = (props) => {
  // const state = props.state;

  const targetData = props.targetData;

  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    return setShowMore(!showMore);
  };

  const getStyle = () => {
    if (showMore) return styles.showContent;
    else return styles.hideContent;
  };

  // MEDICAID

  //wrap content that has "medicaid_coverage_provider_patient_decision": true
  //and say it is true + no not show exceptions
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
        return "This state allows Medicaid  coverage of abortion when the pregnant person&apos;s physical health is endangered. (This is a requirement of the Hyde amendment.)";
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
      <div className={styles.accordian}>
        <div className={styles.title_wrapper}>
          <div onClick={() => toggle()} className={styles.insurance_type}>
            Medicaid{" "}
          </div>

          <span onClick={() => toggle()}>{showMore ? "-" : "+"}</span>
        </div>

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
                  ? "The state allows Medicaid insurance to cover abortion when it&apos;s necessary to save the pregnant person&apos;s life. (This is required by the Hyde amendment.)"
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
      </div>
    </div>
  );
};

export default MedicaidPlans;
