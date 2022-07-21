import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";
import axios from "axios";
import GestationalLimits from "../../components/GestationalLimits";
import InsuranceCoverage from "../../components/InsuranceCoverage";
import {
  token,
  gestationalLimitsTableURL,
  insuranceCoverageTableURL,
} from "../../constants/tableEndpoints";

export const getServerSideProps = async ({ params }) => {
  // console.log("Uncapped params:", params);
  // console.log("Params from URL: ", titleCase(params.state));
  const state = titleCase(params.state);

  const gestLimits = await axios.get(`${gestationalLimitsTableURL}/${state}`, {
    headers: {
      token: `${token}`,
    },
  });

  const insuranceCov = await axios.get(
    `${insuranceCoverageTableURL}/${state}`,
    {
      headers: {
        token: `${token}`,
      },
    }
  );

  // console.log("Return from API:", gestLimits.data);

  return {
    props: { gestData: gestLimits.data, insuranceData: insuranceCov.data },
  };
};

const State = (props) => {
  // debugger;
  // console.log("gestData destructured from props:", props);
  const router = useRouter();
  const stateNameFromUrl = router.query.state;
  const stateName = titleCase(stateNameFromUrl);
  debugger;
  return (
    <div>
      <div>{stateName} Abortion Laws </div>
      <div>{stateName} Gestationl Limits </div>
      <GestationalLimits state={stateName} stats={props.gestData} />

      <InsuranceCoverage state={stateName} stats={props.insuranceData} />
    </div>
  );
};

export default State;
