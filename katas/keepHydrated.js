// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

function litres(time) {
    return Math.floor( time/2)
}


const litres = time => Math.floor(time * 0.5);

function litres(time) {
    return Math.round((time * 0.5) - 0.5)
  }

  function litres(time) {
    let count = 0;
    let restHours = time
    for (let i = 0; i < time; i++) {
      restHours = time - i
      if (restHours >= 1) {
        count += 0.5
      }
      
    }
    return Math.floor(count)
  } 