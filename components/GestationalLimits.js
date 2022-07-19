const GestationalLimits = (props) => {
  //boolean 28, 99, or null
  const banned = props.stats.banned_after_weeks_since_LMP
    ? props.stats.banned_after_weeks_since_LMP
    : null;

  //boolean
  const exception_life = props.stats.exception_life
    ? props.stats.exception_life
    : null;

  //boolean
  const exception_rape_or_incest = props.stats.exception_rape_or_incest
    ? props.stats.exception_rape_or_incest
    : null;

  //three distinctions
  const exception_health = props.stats.exception_health
    ? props.stats.exception_health
    : null;

  //"Serious fetal anomaly" or "Lethal fetal anomaly" or null
  const fetal_health = props.stats.exception_health
    ? props.stats.exception_health
    : null;

  const bans = () => {
    switch (banned) {
      case 28:
        console.log("test 28");
        return "Bans in the third trimester";
      case 99:
        return "Bans after viability";
      case null:
        return "Abortion is now banned in this state.";
      default:
        return `${banned} weeks since Last Menstrual Period (LMP)`;
    }
  };

  const distinction_to_life_saving_exemption = () => {
    switch (exception_health) {
      case "Physical":
        return "physical health (excluding mental health)";
      case "Any":
        return "unspecified health (which may include mental health)";
      case "Major Bodily Function":
        return "exceptions which permit abortion in the case where a person would suffer substantial and irreversible impairment of a major bodily function (which may include mental health)";
      case null:
        return "Abortion is now banned in this state.";
      default:
        return "DEFAULT CASE";
    }
  };

  const fetal_health_exemption = () => {
    switch (exception_health) {
      case "Physical":
        return "physical health (excluding mental health)";
      case "Any":
        return "unspecified health (which may include mental health)";
      case "Major Bodily Function":
        return "exceptions which permit abortion in the case where a person would suffer substantial and irreversible impairment of a major bodily function (which may include mental health)";
      case null:
        return "Abortion is now banned in this state.";
      default:
        return "DEFAULT CASE";
    }
  };

  return (
    <div>
      <div>
        <b>Gestational Limits in {props.stateName}</b>
      </div>
      <div>
        Current abortion bans:<div>{bans() ? `${bans()}` : "RUH-OH"}</div>
        <div>
          LIFE SAVING EXEMPTION:
          {exception_life
            ? "directlyfromtable: abortion is not banned if necessary to save the pregnant person's life (edit later). This state has life-saving exemptions to save the life of the pregnant person."
            : "This state does not have life-saving exemptions in place."}
        </div>
        <div>
          DISTINCTION TO LIFE SAVING EXEMPTION:
          {distinction_to_life_saving_exemption()}
        </div>
        <div>
          RAPE + INCEST EXEMPTIONS:
          {exception_rape_or_incest
            ? "Laws allow abortion in cases of rape and/or incest."
            : "This state does not have rape and incest exceptions in place."}
        </div>
      </div>
    </div>
  );
};

export default GestationalLimits;
