const kebabCase = (name) => {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

export default kebabCase;

//function that is being used more than once
