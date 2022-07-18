import axios from "axios";

const gestationalLimitsTable =
  "https://api.abortionpolicyapi.com/v1/gestational_limits/states";

const token = process.env.PRIVATE_API_KEY;

const StatesList = ({ gestationalLimitsData }) => {
  console.log(gestationalLimitsData);
  //   console.log(process.env.PRIVATE_API_KEY);
  return (
    <div>
      <div></div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.abortionpolicyapi.com/v1/gestational_limits/states",
    {
      headers: {
        token: `${token}`,
      },
    }
  );

  return {
    props: {
      gestationalLimitsData: data.data,
    },
  };
};

export default StatesList;

//want to display the gestational limits for each state
