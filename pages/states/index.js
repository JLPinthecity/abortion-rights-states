import axios from "axios";
import GestationalLimits from "../../components/GestationalLimits";
import Link from "next/link";
import kebabCase from "../../constants/kebabCase";
import states from "../../constants/states";

const token = process.env.PRIVATE_API_KEY;

const StatesList = ({ gestationalLimitsData }) => {
  // array of arrays.length==2, [0] == state name, [1] == state info
  let statesFromData = Object.entries(states);
  debugger;
  //   console.log(statesFromData);

  return (
    <div>
      <div>
        test
        {statesFromData.map((state) => {
          const stateNameInKebabCase = kebabCase(state[1]);

          return (
            <div key={state[1]}>
              <Link href={"/states/" + stateNameInKebabCase}>
                <h1>{state[1]}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const data = await axios.get(
//     "https://api.abortionpolicyapi.com/v1/gestational_limits/states",
//     {
//       headers: {
//         token: `${token}`,
//       },
//     }
//   );

//   return {
//     props: {
//       gestationalLimitsData: data.data,
//     },
//   };
// };

export default StatesList;

//want to display the gestational limits for each state
