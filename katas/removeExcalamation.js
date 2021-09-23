// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let removeExclamationMarks = (s) => s.split('').filter(x=> x != '!' ).join('')

function removeExclamationMarks(s) {
  return s.split('!').join('');
}
