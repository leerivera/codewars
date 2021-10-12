const findDifference = (a, b) =>
  Math.abs(calculateVolume(a) - calculateVolume(b))

// Function Export
module.exports = findDifference

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }