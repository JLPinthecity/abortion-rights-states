import React, { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import USAMap from "react-usa-map";

class Home extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    return {
      NJ: {
        fill: "navy",
        clickHandler: (event) =>
          console.log("Custom handler for NJ", event.target.dataset),
      },
      NY: {
        fill: "#CC0000",
      },
    };
  };

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>What Are My Abortion Rights?</title>
        </Head>

        <div className="App">
          <USAMap
            customize={this.statesCustomConfig}
            onClick={this.mapHandler}
          />
        </div>
      </div>
    );
  }
}

export default Home;
