const user = (allData, userId) => {
  let data = null;
  for (let i = 0; i < allData.length; i++) {
    if (allData[i].id === userId) {
      data = allData;
      i++;
    }
  }
  console.log(data);
  return data;
};

module.exports = {
  user,
};
