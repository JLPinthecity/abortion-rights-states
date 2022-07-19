const GestationalLimits = (props) => {
  const banned = props.stats.banned_after_weeks_since_LMP
    ? props.stats.banned_after_weeks_since_LMP
    : null;
  //   debugger;
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

  return (
    <div>
      <div>{bans() ? `${bans()}` : "RUH-OH"}</div>
    </div>
  );
};

export default GestationalLimits;
