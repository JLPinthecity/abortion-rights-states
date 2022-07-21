import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";
import axios from "axios";
import GestationalLimits from "../../components/GestationalLimits";
import InsuranceCoverage from "../../components/InsuranceCoverage";
import {
  token,
  gestationalLimitsTableURL,
} from "../../constants/tableEndpoints";

const State = (props) => {
  const router = useRouter();
  const stateNameFromUrl = router.query.state;
  const stateName = titleCase(stateNameFromUrl);

  return (
    <div>
      <div>{stateName} Abortion Laws </div>
      <div>{stateName} Gestationl Limits </div>
      <GestationalLimits stats={props.gestationalLimitsData} />
      {/* <InsuranceCoverage stateName={stateName} /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const gestLimits = await axios.get(
    `${gestationalLimitsTableURL + "/" + props.stateName}`,
    {
      headers: {
        token: `${token}`,
      },
    }
  );

  return {
    props: {
      gestationalLimitsData: gestLimits.data,
    },
  };
};

export default State;
