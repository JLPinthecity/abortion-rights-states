import styles from "../styles/Section.module.css";
import React, { useState } from "react";
import PrivateInsurance from "./PrivateInsurance";
import StateInsurance from "./StateInsurance";
import MedicaidPlans from "./MedicaidPlans";

const InsuranceCoverage = (props) => {
  const state = props.state;

  const targetData = props.stats[state];

  return (
    <div className={styles.data_wrapper}>
      <PrivateInsurance state={state} targetData={targetData} />

      <StateInsurance state={state} targetData={targetData} />

      <MedicaidPlans state={state} targetData={targetData} />
    </div>
  );
};

export default InsuranceCoverage;
