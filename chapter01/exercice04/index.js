export function addWithCallback(a, b, callback) {
  let sum = a + b;
  setTimeout(() => {
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
  }, 1000);
}

export async function asyncAdd(a, b) {
  setTimeout(() => {

  }, 1000);
}

export async function filterArrayAsync(array, filterFunc) {
  setTimeout(() => {

  }, 1000);
}
