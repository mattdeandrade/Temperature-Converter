// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
return (f-32)/(9/5);  // TODO
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
 if (f<32) {alert("very cold");}
 else if (f>=32 && f<64) {alert("cold");}
 else if (f>=64 && f<86) {alert("warm");}
 else if (f>=86 && f<100) {alert("hot");}
  else {alert("very hot");}
 } // TODO


/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {return Math.floor(Math.random()*(limit+1));
  // TODO
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
