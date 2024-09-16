// person object with properties and method
const person = {
    firstName: 'James',
    lastName: 'Castillo',
    birthYear: 2003,
    interests: ['cycling', 'painting'],
    contactInfo: {
        email: '2000247@ub.edu.ph',
        phone: '09603818382'
    },
    // Method to introduce the person
    introduce() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}. I was born in ${this.birthYear}.`);
    },
    // Method to update the birth year
    updateBirthYear(newYear) {
        this.birthYear = newYear;
        console.log(`Birth year updated to ${this.birthYear}`);
    },
    // Method to add a new interest
    addInterest(newInterest) {
        this.interests.push(newInterest);
        console.log(`Added new interest: ${newInterest}`);
    },
    // Method to get contact information
    getContact() {
        return `Email: ${this.contactInfo.email}, Phone: ${this.contactInfo.phone}`;
    }
};

// Function to log the full name of the person
const logFullName = (data) => {
    console.log(`${data.firstName} ${data.lastName}`);
};

logFullName(person); // print 'James Castillo'

// Destructure properties from the person object
const { firstName, lastName, birthYear, contactInfo: { email } } = person;
console.log(firstName, lastName, birthYear, email); // Print destructured values

// Array destructuring with a default value for the third element
const interests = ['cycling', 'painting'];
const [interest1, interest2, interest3 = 'chicken'] = interests;
console.log(interest1, interest2, interest3); // print 'cycling', 'painting', and 'chicken'

// Call methods from the person object
person.introduce(); // Print introduction
person.updateBirthYear(2010); // Update birth year to 2010
person.addInterest('traveling'); // Add 'traveling' to interests

console.log('Contact Info:', person.getContact()); // Print contact info

// Use rest parameters to separate the first interest from the rest
const { interests: [firstInterest, ...remainingInterests] } = person;
console.log('First Interest:', firstInterest); // print 'cycling'
console.log('Remaining Interests:', remainingInterests); // print ['painting', 'traveling']

// will create an updated version of the person object with new values
const updatedPerson = {
    ...person,
    firstName: 'James Matthew',
    birthYear: 2004,
    interests: [...person.interests, 'playing']
};

console.log('Original person:', person); // Print original person 
console.log('Updated person:', updatedPerson); // Print updated person 
