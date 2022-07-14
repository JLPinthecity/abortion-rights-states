import { useRouter } from "next/router";

const State = () => {
  const router = useRouter();
  const { statename } = router.query;

  return <div>{statename} abortion laws</div>;
};

export default State;
