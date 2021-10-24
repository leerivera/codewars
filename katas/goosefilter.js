
//   Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your

// Long Solution

var birds = [ 
    'Mallard',
    'Hook Bill',
    'African',
    'Crested',
    'Pilgrim',
    'Toulouse',
    'Blue Swedish' ]
  const gooseFilter = (birds) => {
    const geese = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])
  
    return birds.filter((bird) => !geese.has(bird))
  }
  
  // Function Export
  module.exports = gooseFilter