const findDifference = (a, b) =>
  Math.abs(calculateVolume(a) - calculateVolume(b))

// Function Export
module.exports = findDifference