const chooseStations = function(stations) {
  const newStations = stations.filter(station => station[1] >= 20 && (station[2] === "school" || station[2] === "community centre"));
  const stationNames = [];
  newStations.forEach(element => {
    stationNames.push(element[0]);
  });
return stationNames;
};

const stations = [
  ['Big Bear Donair', 20, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));