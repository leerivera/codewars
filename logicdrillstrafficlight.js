// thinkful logic drills traffic light kata
const updateLight = current => {
    return {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }[current];
  }