function filterObj(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (!Array.isArray(value) && typeof value !== 'object') {
        result[key] = value;
      }
    }
    return result;
  }
  
  const obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
      call: "cellphone"
    },
    d: "Dog"
  };
  
  console.log(filterObj(obj)); 