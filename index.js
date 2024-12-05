let drivers = ['Elias', 'Bosire', 'Ayunga', 'Nina', 'Ebo']

// 1. returnFirstTwoDrivers()
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };


  //2.returnLastTwoDrivers 
   
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };


  //3. selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  console.log(selectingDrivers[0](['Elias', 'Bosire', 'Ayunga', 'Nina', 'Ebo']));

  //4. fare multiplier

  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };

  // 5. fare doubler
  const fareDoubler = createFareMultiplier(2);

  //6. fare tripler

  const fareTripler = createFareMultiplier(3);

//7 driver selector
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };