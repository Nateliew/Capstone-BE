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

const handleChange = (event) => {
  switch (event.target.name) {
    case "name":
      setName(event.target.value);
      break;
    case "email":
      setEmail(event.target.value);
      break;
    case "contact":
      setContact(event.target.value);
      break;
    default:
  }
};

module.exports = {
  check,
  handleChange,
};
