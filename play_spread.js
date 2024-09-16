// Define a person object with hobbies
const person = {
    name: 'Alice',
    hobbies: ['cycling', 'painting', 'reading']
};

// Function to print the last hobby from the hobbies array
function printHobbies(hobbies) {
    console.log(hobbies[hobbies.length - 1]); // Just grabbing the last element
}

printHobbies(person.hobbies); // Should print 'reading'

// Arrow function that does the same thing
const ultimateHobby = (hobbies) => {
    console.log(hobbies[hobbies.length - 1]); // Last element again
};

ultimateHobby(person.hobbies); // Prints 'reading'

// Spread operator to clone an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Cloning arr1 into arr2
console.log(arr2); // Should be [1, 2, 3]

// Merging two arrays with spread operator
const ex2_arr1 = [1, 2, 3];
const ex2_arr2 = [4, 5, 6];
const ex2_arr3 = [...ex2_arr1, ...ex2_arr2]; // Combining both arrays
console.log(ex2_arr3); // Output: [1, 2, 3, 4, 5, 6]

// Adding elements to an existing array using spread
const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex3_arr1, 4, 5, 6]; // Adding more elements
console.log(ex3_arr2); // Output: [1, 2, 3, 4, 5, 6]

// Merging objects with spread operator
const obj3 = { name: 'James', age: 25 };
const obj4 = { city: 'BTG', country: 'PH' };
const obj5 = { ...obj3, ...obj4 }; // Combining both objects
console.log(obj5); // Output: { name: 'James', age: 25, city: 'BTG', country: 'PH' }

// Adding new properties while merging objects
const obj6 = { name: 'James', age: 25 };
const obj7 = { ...obj6, city: 'Batangas', country: 'PH' }; // Adding extra info
console.log(obj7); // Output: { name: 'James', age: 25, city: 'Batangas', country: 'PH' }

// Overriding properties while merging objects
const obj8 = { name: 'James', age: 25 };
const obj9 = { ...obj8, age: 30 }; // Updating age
console.log(obj9); // Output: { name: 'James', age: 30 }
