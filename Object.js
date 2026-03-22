// Methodes + nested properties

const user = {
  firstName: "Elijah",
  lastName: "Onabanjo",
  age: 29,
  hobbies: ["coding", "music"],

  address: {
    street: "12 Allen Avenue",
    city: "Lagos",
    country: "Nigeria"
  },

  // Method: Get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Method: Increment age
  incrementAge() {
    this.age += 1;
    return this.age;
  },

  // Method: Add hobby
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
    return this.hobbies;
  },

  // Method: Get formatted address
  getAddress() {
    const { street, city, country } = this.address;
    return `${street}, ${city}, ${country}`;
  }
};

// object Destructuring 

const { firstName: fName, lastName, age, gender = "Not specified" } = user;

console.log(fName); 
console.log(gender); 

 //Nested Destructing

const {
  address: { city, country }
} = user;

console.log(city); 
console.log(country);

//Array Destructuring

const [firstHobby, secondHobby, thirdHobby = "No hobby"] = user.hobbies;

console.log(firstHobby);
console.log(thirdHobby);

// Function Parameter Destructuring

function displayUser({ firstName, age, address: { city } }) {
  console.log(`${firstName} is ${age} years old and lives in ${city}`);
}

displayUser(user);

//Cloning Objects

const clonedUser = { ...user };

clonedUser.firstName = "John";

console.log(user.firstName);   // Elijah (unchanged)
console.log(clonedUser.firstName); // John

// Merging Objects

const extraInfo = {
  occupation: "Software Developer",
  isActive: true
};

const mergedUser = { ...user, ...extraInfo };

console.log(mergedUser);

// pread Operator (Arrays)

const newHobbies = [...user.hobbies, "gaming"];

console.log(newHobbies);