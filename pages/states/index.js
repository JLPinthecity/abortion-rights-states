import axios from "axios";
import GestationalLimits from "../../components/GestationalLimitsStateCard";

const token = process.env.PRIVATE_API_KEY;

const StatesList = ({ gestationalLimitsData }) => {
  // array of arrays.length==2, [0] == state name, [1] == state info
  let statesFromData = Object.entries(gestationalLimitsData);
  console.log(statesFromData);

  return (
    <div>
      <div>
        {statesFromData.map((state) => {
          return (
            <div key={state[0]}>
              <title></title>
              <h1>{state[0]}</h1>
              <div>
                <GestationalLimits stats={state[1]} />
              </div>
            </div>
          );
        })}
      </div>
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
