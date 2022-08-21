import React, { useState } from "react";
import styles from "../styles/Section.module.css";

const PrivateInsurance = (props) => {
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

  // PRIVATE PLANS
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

  const private_exception_rape_or_incest =
    targetData.private_exception_rape_or_incest
      ? targetData.private_exception_rape_or_incest
      : null;
  return (
    <div className={styles.data_wrapper}>
      <div className={styles.accordian}>
        <div className={styles.title_wrapper}>
          <div onClick={() => toggle()} className={styles.insurance_type}>
            Private health insurance plans
          </div>
          {/* IF SHOWMORE IS TRUE, SHOW -, 
    IF SHOWMORE IS FALSE(DEFAULT), SHOW + */}
          <span onClick={() => toggle()}>{showMore ? "-" : "+"}</span>
        </div>

        <div className={getStyle()}>
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
              Can private insurance cover abortions despite not being required
              to?
            </b>
          </div>
          <div className={styles.answer}>
            {privateCoverage
              ? "Private insurance may cover abortion but not necessarily required to."
              : "This state does not have require coverage and private insurance cannot cover abortion."}
          </div>

          <div className={styles.exceptions}>
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

            <div className={styles.label}>RAPE OR INCEST Exception:</div>
            <div className={styles.answer}>
              {private_exception_rape_or_incest
                ? "This state allows private insurance coverage for cases where pregnancy is a result of rape or incest."
                : "No rape or incest exception."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateInsurance;
