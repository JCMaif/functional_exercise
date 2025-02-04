export function addWithCallback(a, b, callback) {
  const sum = a + b;
  setTimeout(() => {
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  const filteredArray = array.filter(filterFunc);
  setTimeout(() => {
    callback(filteredArray);
  }, 1000);
}

export async function asyncAdd(a, b) {
  return new Promise((resolve, reject) => {
    const sum = a + b;
    setTimeout(() => {
      resolve(sum);
    }, 1000);
  }).then(
    result => {
      console.log("result done");
      return result;
    }
  ).catch(
    error => {
      console.error("Error");
      throw error; 
    }
  );
}

/*
export async function asyncAdd(a, b) {
  let promise = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve(a+b), 1000)
  });
  let result = await promise;
  return result;
}
*/

export async function filterArrayAsync(array, filterFunc) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArray = array.filter(filterFunc);
      resolve(filteredArray);
    }, 1000);
  });
}
