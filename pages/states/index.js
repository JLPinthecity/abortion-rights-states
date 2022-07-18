import Axios from "axios";

const gestationalLimitsTable =
  "https://api.abortionpolicyapi.com/v1/gestational_limits/states";

const StatesList = ({ gestationalLimitsData }) => {
  console.log(gestationalLimitsData);
  return (
    <div>
      <div></div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.abortionpolicyapi.com/v1/gestational_limits/states"
  );

  return {
    props: {
      gestationalLimitsData: data.data,
    },
  };
};

export default StatesList;

//want to display the gestational limits for each state
