import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";
import GestationalLimits from "../../components/GestationalLimits";

const State = (props) => {
  const router = useRouter();
  const stateNameFromUrl = router.query.state;
  const stateName = titleCase(stateNameFromUrl);

  debugger;

  return (
    <div>
      <div>{stateName} Abortion Laws </div>
      <div>{stateName} Gestationl Limits </div>
      <GestationalLimits stateName={stateName} />
    </div>
  );
};

export default State;
