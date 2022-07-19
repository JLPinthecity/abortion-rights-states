import React, { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import USAMap from "react-usa-map";

class Home extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  //clicking on map returns state abbrev
  states = {
    AZ: "Arizona",
    AL: "Alabama",
    AK: "Alaska",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  getStateFullName = (stateAbbr) => {
    return states[stateAbbr];
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
