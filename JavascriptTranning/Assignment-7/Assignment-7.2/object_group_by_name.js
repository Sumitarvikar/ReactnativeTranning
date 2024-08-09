const users = [
    { "id": 1, "first_name": "Nicki", "email": "ncrozier0@squarespace.com", "date_of_birth": "2009/05/09" },
    { "id": 2, "first_name": "Raychel", "email": "rmcgrady1@cpanel.net", "date_of_birth": "1996/11/05" }
];



function mapBy(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {});
}


function mapByName(arr, key) {
    let acc = {}
    for (obj of arr) {
        acc[obj[key]] = obj
    }
    return acc
}

console.log(mapByName(users, "first_name"));
console.log("********************");
console.log(mapBy(users, "first_name"));