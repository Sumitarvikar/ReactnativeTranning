function mergeById(arr1, arr2) {
    const map = new Map();
    arr1.forEach(item => map.set(item.id, { ...map.get(item.id), ...item }));
    arr2.forEach(item => map.set(item.id, { ...map.get(item.id), ...item }));
    return Array.from(map.values());
}

const userNames = [{
    "id": 1,
    "first_name": "Nicki"
}, {
    "id": 2,
    "first_name": "Raychel"
}, {
    "id": 3,
    "first_name": "Demetris"
}, {
    "id": 4,
    "first_name": "Amata"
}];

const userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net"
}, {
    "id": 1,
    "email": "ncrozier0@squarespace.com"
}, {
    "id": 4,
    "email": "abraiden3@canalblog.com"
}, {
    "id": 3,
    "email": "dkilshall2@elpais.com"
}];

console.log(mergeById(userNames, userEmails));
