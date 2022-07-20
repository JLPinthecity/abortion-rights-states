import { useRouter } from "next/router";

const State = (props) => {
  const router = useRouter();
  const stateNameFromUrl = router.query.state;

  debugger;

  return <div>{statename} abortion laws TEST IF DYNAMICLINKS WORK </div>;
};

export default State;
