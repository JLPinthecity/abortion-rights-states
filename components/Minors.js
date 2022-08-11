import styles from "../styles/Section.module.css";

const Minors = (props) => {
  //   console.log("from minors component", props);
  const state = props.state;

  const targetData = props.stats[state];

  //DATA FOR ALL 50 STATES EXISTS FROM MINORS DATA TABLE
  //SO CONDITIONAL RENDERING WILL BE FOR WHETHER OR NOT MINORS ARE ALLOWED TO CONSENT TO ABORTION
  //allows_minor_to_consent_to_abortion VALUE

  const minorsAllowedConsent = targetData.allows_minor_to_consent_to_abortion
    ? targetData.allows_minor_to_consent_to_abortion
    : null;

  debugger;

  if (minorsAllowedConsent) {
    //   const targetData = props.stats[state];
    //   debugger;
    //   let ageOfRestrictions;
    //   if (targetData.below_age != undefined || targetData.below_age != null) {
    //     ageOfRestrictions = targetData.below_age;
    //   }
    //boolean
    //   const parental_consent_required = targetData.parental_consent_required
    //     ? targetData.parental_consent_required
    //     : null;
    //   //boolean
    //   const parental_notification_required =
    //     targetData.parental_notification_required
    //       ? targetData.parental_notification_required
    //       : null;
    //   const parents_required = targetData.parents_required;
    //1, 2, or null
    //   const num_parents_required = () => {
    //     switch (parents_required) {
    //       case 1:
    //         console.log("test 28");
    //         return "One parent must be notified. **Many, but not all, states have extended the definition of 'parent' to include other adult guardians.";
    //       case 2:
    //         return "Both parents of the minor must be notified. **Many, but not all, states have extended the definition of 'parent' to include other adult guardians.";
    //       case null:
    //         return "There are no restrictions on minors' abortions currently being enforced.";
    //       default:
    //         return "There are no restrictions on minors' abortions currently being enforced.";
    //     }
    //   };
    //boolean
    //   const judicial_bypass_available = targetData.judicial_bypass_available
    //     ? targetData.judicial_bypass_available
    //     : null;
    //boolean

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
    return <div>test</div>;
  }
};

export default Minors;
