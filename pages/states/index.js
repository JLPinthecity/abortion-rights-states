import Link from "next/link";
import kebabCase from "../../constants/kebabCase";
import states from "../../constants/states";
import styles from "../../styles/States.module.css";

const StatesList = () => {
  let statesFromData = Object.entries(states);

  return (
    <div className={styles.states_container}>
      <div className={styles.states}>
        {statesFromData.map((state) => {
          const stateNameInKebabCase = kebabCase(state[1]);

          return (
            <div className={styles.state} key={state[1]}>
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
