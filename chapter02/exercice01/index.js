/**
 * Print in the console each elements of the table.
 * @param {number[]} table
 */
export function printTable(table) {
  for (let i = 0; i < table.length; i++) {
     console.log(table[i])
  }
}

/**
 * Print in the console each elements of the table in reverse order.
 * @param {number[]} table
 */
export function printTableInverted(table) {
  for (let i = table.length-1; i >= 0; i--) {
    console.log(table[i]);
  }
}
