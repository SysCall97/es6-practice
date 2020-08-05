let emailGenerator = function (firstName, lastName) {
    let random = Math.round(Math.random() * (999 - 100) + 100);
    let email = `${firstName}.${lastName}${random}@gmail.com`;
    return email;
}

let firstName = "kazi";
let lastName = "mashry";
let email = emailGenerator(firstName, lastName);
console.log(email);
