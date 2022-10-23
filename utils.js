const check = (blurb, userSummary) => {
  if (blurb === "" && userSummary !== null) {
    return "run here 1";
  } else if (blurb !== null && userSummary !== null) {
    return "run here 2";
  } else if (blurb !== null && userSummary === null) {
    return "run here 3";
  } else {
    return "no run";
  }
};

module.exports = {
  check,
};
