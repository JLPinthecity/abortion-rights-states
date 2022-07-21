const titleCase = (stateUrl) => {
  const separateWords = stateUrl.replace("_", " ");

  separateWords = separateWords.toLowerCase().split(" ");
  for (var i = 0; i < separateWords.length; i++) {
    separateWords[i] =
      separateWords[i].charAt(0).toUpperCase() + separateWords[i].slice(1);
  }
  return separateWords.join(" ");
};

export default titleCase;
