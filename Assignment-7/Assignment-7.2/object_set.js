function uniqueStrings(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}

const strings = ["apple", "banana", "apple", "orange", "banana", "pear"];
console.log(uniqueStrings(strings));