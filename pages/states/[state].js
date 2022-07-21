import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";

const State = (props) => {
  const router = useRouter();
  const stateNameFromUrl = router.query.state;

  debugger;

  return <div>{statename} abortion laws TEST IF DYNAMICLINKS WORK </div>;
};

export default State;
