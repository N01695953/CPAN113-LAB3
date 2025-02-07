//Step 1: Declaring Arrays
let studentArray = ["Fariah",10, "Yusuf", "n01695953", true] 

//Step 2: Accessing Arrays
let firstElement = studentArray[0];
let middleElement = studentArray[1]
let lastElement = studentArray[studentArray.length - 1];

console.log(firstElement, middleElement, lastElement);

//Step 3: Using Array Properties
console.log("Length of the Array:", studentArray.length);

//Step 4: Array Methods
studentArray.push("CPAN")
console.log("Push:", studentArray);

studentArray.pop()
console.log("Pop:", studentArray);

let student = studentArray.slice(1, 3);
console.log("Slice:", student);

//Step 5: Iterating Through Arrays
for (let i = 0; i < studentArray.length; i++){
    console.log(studentArray[i]);
}

//Step 6: Array Destructuring
let [first,second, ...rest] = studentArray;
console.log("First:", first)
console.log("Second:", second)
console.log("Rest of Student Array:", rest);