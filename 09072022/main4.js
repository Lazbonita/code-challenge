
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



function executeValue(callback) { return typeof callback === 'function' ? callback(value) : value }
function zero(callback) {
  const value = 0;
  return executeValue(callback);
}
function one(callback) {
  const value = 1;
  return executeValue(callback);
}
function two(callback) {
  const value = 2;
  return executeValue(callback);
}
function three(callback) {
  const value = 3;
  return executeValue(callback);
}
function four(callback) {
  const value = 4;
  return executeValue(callback);
}
function five(callback) {
  const value = 5;
  return executeValue(callback);
}
function six(callback) {
  const value = 6;
  return executeValue(callback);
}
function seven(callback) {
  const value = 7;
  return executeValue(callback);
}
function eight(callback) {
  const value = 8;
  return executeValue(callback);
}
function nine(callback) {
  const value = 9;
  return executeValue(callback);
}

function plus(a) {
  return (b) => {
    return a + b
  }
}
function minus(a) {
  return (b) => {
    return b - a
  }
}
function times(a) {
  return (b) => {
    return a * b
  }
}
function dividedBy(a) {
  return (b) => {
    return Math.floor(b/a)
  }
}