const data = [
    { "id": 1, "first_name": "Nicki", "email": "ncrozier0@squarespace.com", "date_of_birth": "2009/05/09" },
    { "id": 2, "first_name": "Raychel", "email": "rmcgrady1@cpanel.net", "date_of_birth": "1996/11/05" },
    { "id": 3, "first_name": "Demetris", "email": "dkilshall2@elpais.com", "date_of_birth": "2018/12/31" },
    { "id": 4, "first_name": "Amata", "email": "abraiden3@canalblog.com", "date_of_birth": "2012/05/23" },
    { "id": 5, "first_name": "Venita", "email": "vheap4@clickbank.net", "date_of_birth": "2020/10/04" },
    { "id": 6, "first_name": "Fairfax", "email": "fcrichton5@merriam-webster.com", "date_of_birth": "2009/12/23" },
    { "id": 7, "first_name": "Kathleen", "email": "kvasyukhnov6@devhub.com", "date_of_birth": "2010/12/20" },
    { "id": 8, "first_name": "Sam", "email": "scorck7@sitemeter.com", "date_of_birth": "2020/08/30" },
    { "id": 9, "first_name": "Virgilio", "email": "vferandez8@e-recht24.de", "date_of_birth": "2000/09/07" },
    { "id": 10, "first_name": "Townie", "email": "tpetyt9@upenn.edu", "date_of_birth": "2018/09/01" }
];


function filterByName(name) {
    return data.filter(person => person.first_name.includes(name))
}

const emails = data.map(person => person.email)
console.log(emails);

const sortedByDateOfBirth = data.slice().sort((a, b) => new Date(b.date_of_birth) - new Date(a.date_of_birth));

console.log(sortedByDateOfBirth);

function getById(id) {
    return data.find(person => person.id === id);
}

console.log(getById(5));

// 


const arr = [1, 2, 3, 4];

console.log('Original array:', arr);

arr.push(5);
console.log('After push:', arr); 
arr.pop();
console.log('After pop:', arr); 

arr.sort((a, b) => b - a);
console.log('After sort:', arr); 

const filteredArr = arr.filter(num => num > 2);
console.log('Filtered array:', filteredArr); 

const found = arr.find(num => num > 2);
console.log('Found element:', found); 

const mappedArr = arr.map(num => num * 2);
console.log('Mapped array:', mappedArr); 
