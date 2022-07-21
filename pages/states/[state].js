import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";

const State = (props) => {
  const router = useRouter();
  const stateNameFromUrl = router.query.state;
  const stateName = titleCase(stateNameFromUrl);

  // debugger;

  return (
    <div>
      <div>{stateName} Abortion Laws </div>
      <div>{stateName} Gestationl Limits </div>
    </div>
  );
};

export default State;
