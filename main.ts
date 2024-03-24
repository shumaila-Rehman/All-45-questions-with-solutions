//                   =======> Question # 3 <=======
//Name Cases: Store a person’s name in a variable, and then print that
//person’s name in lowercase, uppercase, and titlecase.

let personName = "shumaila rehman";

// print in upper case
console.log(personName.toUpperCase());


//print in lower case
console.log(personName.toLowerCase());


//print in Title case.
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
