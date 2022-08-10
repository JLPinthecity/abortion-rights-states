import styles from "../styles/Section.module.css";

const Minors = (props) => {
  //   console.log("from minors component", props);
  const state = props.state;

  const targetData = props.stats[state];

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
  //   const allows_minor_to_consent = targetData.allows_minor_to_consent
  //     ? targetData.allows_minor_to_consent
  //     : null;

  //CONDITIONALLY RENDER
  //if allows_minor_to_consent is true
  //then dont render everything else.
  //if allows_minor_to_consent is false, render everything else.

  //   console.log("allows_minor_to_consent is", allows_minor_to_consent);

  //   const consentForMinors = allows_minor_to_consent;

  //   if (consentForMinors) {
  //     return <div>test</div>;
  //   }
  return <div>else condition</div>;
};

export default Minors;
