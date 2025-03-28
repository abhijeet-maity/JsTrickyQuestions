// /!! Challenge 1 of Promise/;
// new Promise((resolve) => {
//   resolve(1);
//   Promise.resolve().then(() => {
//     console.log(2);
//   });
// }).then((data) => {
//   console.log(data);
// });
// console.log(3);
// // // 3 2 1

// /!! Challenge 2 of Promise/;
// new Promise((resolve) => {
//   Promise.resolve().then(() => {
//     resolve(1);
//     Promise.resolve().then(() => console.log(2));
//   });
// }).then((data) => {
//   console.log(data);
// });
// console.log(3);

// /!! Challenge 3 of Promise /;

// function executePromise1() {
//   console.log("A");
//   new Promise(function (resolve) {
//     resolve();
//   }).then(() => {
//     console.log(1);
//   });
// }

// function executePromise2() {
//   console.log("B");
//   new Promise(function (resolve) {
//     resolve();
//   }).then(() => {
//     console.log(2);
//   });
// }

// const button = document.querySelector("button");
// button.addEventListener("click", executePromise1);
// button.addEventListener("click", executePromise2);
// button.click();
// /*Output on Button Click - A 1 B 2 */
// /*Output on calling click function - A B 1 2 */

// //Understanding Promises in better way.
// const URL = "https://jsonplaceholder.typicode.com/todos";
// debugger;
// const user = fetch(URL);
// debugger;
// console.log("Hello");
// console.log(user);

//Returning Promises from Normal Functions.

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4");
      resolve();
    }, 1000);
  });
}

// Chaining Promises
step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(() => {
    console.log("All steps completed");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
