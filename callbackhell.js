// callback hell

//it is a example of callback hell.

function multiplyby2(num, cb) {
  setTimeout(() => {
    cb("notdefined", num * 2);
  }, 400);
}

function multiply(num) {
  multiplyby2(num, (error, result) => {
    multiplyby2(result, (error, result1) => {
      multiplyby2(result1, (error, result2) => {
        console.log(result2);
      });
    });
  });
}

console.log(multiply(3)); // 24

// we need to resolve this using Promise

//here we need to use promise so cb not required

function multiplyby3(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("notdefined", num * 3);
    }, 400);
  });
}

// cb function returns promises so we need to get the promises
function multiplyPromise(num) {
  multiplyby3(num).then((result) => {
    multiplyby3(result).then((result1) => {
      multiplyby3(result1).then((result2) => {
        console.log(result2);
      });
    });
  });
}

console.log(multiplyPromise(3)); // 24
