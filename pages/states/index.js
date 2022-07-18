import Axios from "axios";

const gestationalLimitsTable =
  "https://api.abortionpolicyapi.com/v1/gestational_limits/states";

const StatesList = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get({ gestationalLimitsTable });

  return {
    props: {
      gestationalLimitsData: data.data,
    },
  };
};

export default StatesList;

//want to display the gestational limits for each state
