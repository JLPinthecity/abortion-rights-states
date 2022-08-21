import React, { useState } from "react";
import styles from "../styles/Section.module.css";

const StateInsurance = (props) => {
  const targetData = props.targetData;
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

  return (
    <div className={styles.data_wrapper}>
      <div className={styles.accordian}>
        <div className={styles.title_wrapper}>
          <div onClick={() => toggle()} className={styles.insurance_type}>
            State marketplace insurance plans
          </div>
          <span onClick={() => toggle()}>{showMore ? "-" : "+"}</span>
        </div>

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
            offered in the state's Health Care Exchange?
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
      </div>
    </div>
  );
};

export default StateInsurance;
