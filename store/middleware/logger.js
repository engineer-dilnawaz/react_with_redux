// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log(store, next, action);

//       next(action);
//     };
//   };
// }

export const logger = (store) => (next) => (action) => {
  //   console.log(store, next, action);
  next(action);
};
