/* eslint-disable react/display-name */
import React, { Component, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import states from "../constants/states";
import USAMap from "react-usa-map";

export default function Home(props) {
  const getStateFullName = (stateAbbr) => {
    // console.log("States list", states);
    // console.log("State abbreviation: ", stateAbbr);
    // console.log("Interpolated from array: ", states[stateAbbr]);
    return states[stateAbbr];
  };

  const mapHandler = (event) => {
    // console.log("Map handler works!", event.target.dataset.name);
    getStateFullName(event.target.dataset.name);
  };

  //clicking on map returns state abbrev

  const statesCustomConfig = {
    NJ: {
      fill: "navy",
      clickHandler: (event) =>
        console.log("Custom handler for NJ", event.target.dataset),
    },
    NY: {
      fill: "#CC0000",
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>What Are My Abortion Rights?</title>
      </Head>

      <div className="App">
        <USAMap customize={statesCustomConfig} onClick={mapHandler} />
      </div>
    </div>
  );
}
