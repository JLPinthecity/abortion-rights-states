import axios from "axios";
import GestationalLimits from "../../components/GestationalLimits";
import Link from "next/link";

const token = process.env.PRIVATE_API_KEY;

const StatesList = ({ gestationalLimitsData }) => {
  debugger;
  // array of arrays.length==2, [0] == state name, [1] == state info
  let statesFromData = Object.entries(gestationalLimitsData);
  //   console.log(statesFromData);

  const kebabCase = (name) => {
    return name
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  return (
    <div>
      <div>
        {statesFromData.map((state) => {
          const stateNameInKebabCase = kebabCase(state[0]);

          return (
            <div key={state[0]}>
              <Link href={"/states/" + stateNameInKebabCase}>
                <h1>{state[0]}</h1>
              </Link>
              <div>
                <GestationalLimits stats={state[1]} stateName={state[0]} />
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
