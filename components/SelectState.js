import states from "../constants/states";

const justStates = () => {
  states.map((key, index) => {
    return (
      <div key={index}>
        <h2>
          {key}: {employee[key]}
        </h2>

        <hr />
      </div>
    );
  });
};

const SelectState = () => {
  return <div>{justStates}</div>;
};

export default SelectState;
