const person = {name: "Arnold", age: 17, job: "Student", phone: "01784829842", friends: ["Tom Cruise", "Tom Hancks", "Keanue Reives"]};
const {phone, age} = person;
const job = person.job;

console.log(phone, age);
console.log(job);

const ages = [11, 12, 13, 14, 15, 26, 27, 27];
const [firstAge, secondAge, ...restAges] = ages;
console.log(firstAge);
console.log(secondAge);
console.log(restAges);