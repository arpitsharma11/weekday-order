export const orderDetailsCalculator = (mealList = []) => {
  const dishSlots = {
    M: 2,
    A: 1,
  };

  const dishTime = {
    M: 29,
    A: 17,
  };

  let noOfSlots = 0;
  let totalTime = dishTime.A;

  mealList.forEach((meal) => {
    noOfSlots += dishSlots[meal];
    if (meal === 'M') {
      totalTime = dishTime.M;
    }
  });

  return {
    noOfSlots,
    totalTime,
  };
};
