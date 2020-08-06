const juniorAges = [4, 5, 6, 4, 7, 8, 40];
const ages = [13, 15, 14, 17, 15, 17];
const seniorAges = [24, 26, 27, 33, 36];

const allAges = juniorAges.concat(ages).concat([23]).concat(seniorAges);
console.log(allAges);

const allAges2 = [...juniorAges, ...ages, 23, ...seniorAges];
console.log(allAges2);

const max1 = Math.max(...allAges2);
console.log(max1);

const max2 = Math.max(...juniorAges, ...ages, ...seniorAges);
console.log(max2);