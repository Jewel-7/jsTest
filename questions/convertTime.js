/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  if (isNaN(parseInt(seconds))) {
    throw new Error("Invalid Input");
  }

  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return { hours, minutes, seconds };
};

module.exports = convertTime;
