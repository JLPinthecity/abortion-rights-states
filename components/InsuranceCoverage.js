const InsuranceCoverage = (props) => {
  const state = props.state;

  const targetData = props.stats[state];

  // debugger;

  const requiresCoverage = targetData.requires_coverage
    ? targetData.requires_coverage
    : null;

  return (
    <div>
      <div>
        <b>
          Insurance Coverage (abortion restrictions that specifically restrict
          what type of insurance coverage can be used to cover abortion (both
          Medicaid and private insurance))
        </b>
      </div>

      <div>
        <b>Requires coverage:</b>
      </div>
      <div>
        {requiresCoverage
          ? "If checked, the state requires that require private health plans regulated by the state cover abortion. These requirements do not apply to self-insured plans (in which the employer takes on all the risk, instead of contracting with a health insurer) as self-insured plans are regulated at the federal, not state, level."
          : "This state does not have require coverage."}
      </div>
    </div>
  );
};

export default InsuranceCoverage;

// exchange_coverage_no_restrictions: true
// medicaid_coverage_provider_patient_decision: true
// medicaid_exception_life: true
// requires_coverage: true
