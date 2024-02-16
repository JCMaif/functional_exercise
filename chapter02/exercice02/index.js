/**
 * Print in the console the sum of each elements.
 * @param {number[]} table
 */
export function sumOfTable(table) {
  console.log(table.reduce((acc, value)=>acc+value, 0))
}

/**
 * Print only even number of an array.
 * @param {number[]} table
 */
export function evenNumberOfTable(table) {
  console.log(table.filter((value)=>value % 2 == 0))
}

/**
 * Print index of first wanted element in table, print an error message if it's not in the table
 * @param {number[]} table
 * @param {number} wanted
 */
export function indexOfWantedInTable(table, wanted) {
  const value = table.findIndex((value) => value == wanted)
  if (value != -1) {
    console.log(value)
  } else {
    console.error('Élément non trouvé')
  }
}

/**
 * Print each elements that was greater than a limit
 * @param {number[]} table
 * @param {number} limit
 */
export function greaterThanLimitInTable(table, limit) {
  const value = table.filter((value) => value > limit)
  console.log(value)
}

/**
 * Print cumulative sum of table
 * @param {number[]} table
 */
export function cumulativeSumOfTable(table) {
  table.reduce((acc, value) => {
    const result = acc+value
    console.log(result)
    return result
  }, 0)
}

/**
 * Print the minimum value in the table.
 * @param {number[]} table
 */
export function printMinValue(table) {
  let min = table[0];
  for (let i = 1; i < table.length; i++) {
    if (table[i] < min) {
      min = table[i];
    }
  }
  console.log(min);
}

/**
 * Print the maximum value in the table.
 * @param {number[]} table
 */
export function printMaxValue(table) {
  let max = table[0];
  for (let i = 1; i < table.length; i++) {
    if (table[i] > max) {
      max = table[i];
    }
  }
  console.log(max);
}
