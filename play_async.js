console.log("Hello ");

setTimeout(() => {
    console.log('Timer is done. ');
}, 2000);

console.log('Hi');

console.log("Ordering your pizza...");

const pizzaPromise = () => {
   return new Promise ((resolve , reject) => {
    let order = true;

    if (order) {
        setTimeout(() => {
            resolve('After 5 seconds, Pizza delivered!');
        }, 5000);

        setTimeout(() => {
            reject('After 5 seconds, Pizza not delivered!');
        }, 5000);
    }
   });
};

pizzaPromise()
    .then ((result) => {
        console.log(result);
    })
    .catch ((error) => {
        console.log(error);
    });

console.log("Waiting for your pizza...")