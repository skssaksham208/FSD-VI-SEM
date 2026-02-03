const myPromise = new Promise((resolve, reject) => {
    let age = 24;

    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
});

console.log(myPromise);

myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    })