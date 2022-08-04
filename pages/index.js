/* eslint-disable react/display-name */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import states from "../constants/states";
import USAMap from "react-usa-map";
import kebabCase from "../constants/kebabCase";
import { useRouter } from "next/router";
import SelectState from "../components/SelectState";

export default function Home(props) {
  // debugger;
  const router = useRouter();

  const getStateFullName = (stateAbbr) => {
    // console.log("States list", states);
    // console.log("State abbreviation: ", stateAbbr);
    // console.log("Interpolated from array: ", states[stateAbbr]);
    let href = "/states/" + kebabCase(states[stateAbbr]);
    router.push(href);
  };

  const mapHandler = (event) => {
    // console.log("Map handler works!", event.target.dataset.name);
    getStateFullName(event.target.dataset.name);
  };

  //clicking on map returns state abbrev

  const statesCustomConfig = {
    // SD: {
    //   fill: "black",
    // },
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.intro}>
        <div className={styles.title}>
          <h1>What Are My Abortion Rights?</h1>
        </div>
        <div className={styles.text}>
          <p>
            Click on your state on the U.S. map or select your state from the
            dropdown to see up-to-date data about abortion laws in your state.
            <br />
            <br />
            Find out specifics about what your state mandates in terms of
            gestational limits, private and public insurance coverage, mandatory
            waiting periods, and regulations regarding minors.
            <br />
            <br />
            We try and define terms like <i>gestational limit</i> and{" "}
            <i>viability </i>
            for better comprehension of current state regulations.
          </p>
        </div>
      </div>

      <SelectState />

      <div className={styles.map}>
        <USAMap
          customize={statesCustomConfig}
          onClick={mapHandler}
          className={styles.svg}
        />
      </div>
    </div>
  );
}
