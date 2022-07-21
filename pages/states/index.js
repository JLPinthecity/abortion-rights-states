import Link from "next/link";
import kebabCase from "../../constants/kebabCase";
import states from "../../constants/states";

const StatesList = () => {
  let statesFromData = Object.entries(states);

  return (
    <div>
      <div>
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

export default StatesList;

//getStaticPaths runs at build time
