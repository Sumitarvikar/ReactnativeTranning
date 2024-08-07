function sort(arr, key, order = "asc") {
    return arr.slice().sort((a, b) => {
        if (a[key] < b[key]) return order === "asc" ? -1 : 1;
        if (a[key] > b[key]) return order === "asc" ? 1 : -1;
        return 0;
    });
}

// Example usage:
const users = [
    { "id": 1, "first_name": "Nicki", "email": "ncrozier0@squarespace.com", "date_of_birth": "2009/05/09", "gender": "Male" },
    { "id": 2, "first_name": "Raychel", "email": "rmcgrady1@cpanel.net", "date_of_birth": "1996/11/05", "gender": "Female" },
    { "id": 3, "first_name": "Demetris", "email": "dkilshall2@elpais.com", "date_of_birth": "2018/12/31", "gender": "Male" },
    { "id": 4, "first_name": "Amata", "email": "abraiden3@canalblog.com", "date_of_birth": "2012/05/23", "gender": "Female" }
];
console.log(sort(users, "id", "desc"));
console.log(sort(users, "first_name", "asc"));
