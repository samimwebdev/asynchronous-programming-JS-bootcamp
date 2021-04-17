//Synchronous programming example one complete then go for another ang progress similarly
//javascript is single threaded
//javascript is single threaded and by default asynchronous in nature
// console.log(1);

//Asynchronous function
// getNumber(2, function(num) {
//   console.log(num);
// });
// console.log(3);

//callback function
//Promise API
//async await -behind the scene works with Promise

//Dealing asynchronous result with callback
//================================================

// function getNumber(num, callback) {
//   setTimeout(() => {
//     console.log('calling after 2 sec');
//     callback(num);
//   }, 2000);
// }

//1.Getting user - 2s
//2.course enrollment - 2s
//3. price of the course -2s

//callback hell/christmas tree

// getUser(1, function(user) {
//   console.log(user);
//   enrolledCourse(user.name, function(courses) {
//     console.log(courses);
//     getPrice(courses[0], function() {
//       console.log('Javascript course price is 4000');
//     });
//   });
// });
// function getUser(id, callback) {
//   setTimeout(() => {
//     callback({
//       id: 1,
//       name: 'Adnan',
//       profession: 'Web developer'
//     });
//   }, 2000);
// }

// function enrolledCourse(firstName, callback) {
//   setTimeout(() => {
//     callback(['javascript', 'React', 'Node.Js']);
//   }, 2000);
// }

// function getPrice(courseName, callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

//Working with Promise
//===========================================

//pending, resolved, reject
// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('I will be done after 2sec');
//     reject(new Error('Some Error occured'));
//   }, 2000);
// });
// result
//   .then(text => {
//     console.log(text);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function getNumber(num, callback) {
//   setTimeout(() => {
//     console.log('calling after 2 sec');
//     callback(num);
//   }, 2000);
// }

//1.Getting user - 2s
//2.course enrollment - 2s
//3. price of the course -2s
//callback hell/christmas tree
// getUser(1, function(user) {
//   console.log(user);
//   enrolledCourse(user.name, function(courses) {
//     console.log(courses);
//     getPrice(courses[0], function() {
//       console.log('Javascript course price is 4000');
//     });
//   });
// });

//Using promise
//=============================================
// getUser(1, function(user) {
//   console.log(user);
//   enrolledCourse(user.name, function(courses) {
//     console.log(courses);
//     getPrice(courses[0], function() {
//       console.log('Javascript course price is 4000');
//     });
//   });
// });
//
// getUser(1)
//   .then(user => {
//     console.log(user);
//     return enrolledCourse(user.firstName);
//   })
//   .then(courses => {
//     console.log(courses);
//     return getPrice(courses[0]);
//   })
//   .then(() => {
//     console.log('Course price is 4000');
//   })
//   .catch(err => console.log(err.message));

//async await
// try {
//   async function getResult() {
//     const user = await getUser(1)
//     // console.log(user);
//     const courses = await enrolledCourse(user.name)
//     const price = await getPrice(courses[0])
//     console.log(price)
//   }

//   getResult()
// } catch (err) {
//   console.dir(err)
// }
//You can also get Promise return of async await
//==============================================
// getResult().then(courses => {
//   console.log(courses);
// })
// .catch(err => {
//   console.log(err);
// });

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: 'Adnan',
//         profession: 'Web developer'
//       })
//     }, 2000)
//   })
// }

// function enrolledCourse(firstName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['javascript', 'React', 'Node.Js'])
//     }, 2000)
//   })
// }

// function getPrice(courseName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve(new Error('Some error occured'));
//       reject(new Error('Error show'))
//     }, 2000)
//   })
// }

//Other promise API Method
//=================================================
// const p1 = Promise.resolve('step1');
// const p2 = Promise.resolve('step2');
// const p3 = Promise.reject(new Error('step 3'));

//facebook-2s
//twitter-2s
//linkedin-2s

// Promise.all([p1, p2, p3])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// Promise.race([p1, p2, p3]).then(result => {
//   console.log(result);
// });
