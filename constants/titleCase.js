const titleCase = (stateUrl) => {
  const separateWords = stateUrl.replace("-", " ");

  function titleCaseStateName(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  titleCaseStateName(separateWords);
  console.log(
    "titleCaseStateName(separateWords) is",
    titleCaseStateName(separateWords)
  );
};

export default titleCase;
