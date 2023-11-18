const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {

  const developers = data.filter(person => person.profession === 'developer');
  console.log(developers);
}

// 2. Add Data
function addData() {

  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');
  const newData = { name, age, profession };
  data.push(newData);
  console.log('Data added:', newData);
}

// 3. Remove Admins
function removeAdmin() {

  const newData = data.filter(person => person.profession !== 'admin');
  console.log('Admins removed:', newData);
}

// 4. Concatenate Array
function concatenateArray() {

  const dummyArray = [
    { name: "dummy1", age: 30, profession: "developer" },
    { name: "dummy2", age: 35, profession: "admin" },
  ];
  const resultArray = data.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age
function averageAge() {

  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log('Average Age:', average);
}

// 6. Age Check
function checkAgeAbove25() {

  const isAbove25 = data.some(person => person.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {

  const professions = [...new Set(data.map(person => person.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {

  data.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', data);
}

// 9. Update Profession
function updateJohnsProfession() {

  data.forEach(person => {
    if (person.name.toLowerCase() === 'john') {
      person.profession = 'manager';
    }
  });
  console.log('John\'s profession updated:', data);
}

// 10. Profession Count
function getTotalProfessions() {

  const professionCount = {};

  data.forEach(person => {
    const { profession } = person;
    if (professionCount[profession]) {
      professionCount[profession]++;
    } else {
      professionCount[profession] = 1;
    }
  });

  for (const profession in professionCount) {
    console.log(`${profession}: ${professionCount[profession]}`);
  }
}