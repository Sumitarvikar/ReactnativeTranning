const users = [
    { "id": 1, "first_name": "Nicki", "email": "ncrozier0@squarespace.com", "date_of_birth": "2009/05/09", "gender": "Male" },
    { "id": 2, "first_name": "Raychel", "email": "rmcgrady1@cpanel.net", "date_of_birth": "1996/11/05", "gender": "Female" },
    { "id": 3, "first_name": "Demetris", "email": "dkilshall2@elpais.com", "date_of_birth": "2018/12/31", "gender": "Male" },
    { "id": 4, "first_name": "Amata", "email": "abraiden3@canalblog.com", "date_of_birth": "2012/05/23", "gender": "Female" }
];



function groupByKey(arr, key) {
    const groupArray = {};
    for (const obj of arr) {
        const groupKey = obj[key];
        if (groupArray[groupKey] === undefined) {
            groupArray[groupKey] = [obj];
        } else {
            groupArray[groupKey].push(obj);
        }
    }
    return groupArray;
}

function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {});
}



console.log(groupByKey(users , "gender"))
console.log("*****************************")
console.log(groupBy(users, "gender") )