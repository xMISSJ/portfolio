/**
 * @param {number} number
 * @returns {string}
 */
export function toRomanianNumber(number) {
  const romanianNumbers = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];

  return romanianNumbers[number - 1] ?? String(number);
}
