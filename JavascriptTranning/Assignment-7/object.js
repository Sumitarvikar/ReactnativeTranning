const originalObject = {
    name: "Harry Potter",
    age: 12,
    address: {
      details: ["4", "Privet Drive"],
      area: "Little Whinging",
      city: "Surrey",
      state: "England"
    }
  };
  
const updatedObject2 = Object.assign({} , originalObject)
updatedObject2.address.details[0] = "5"

  const updatedObject = Object.assign({}, originalObject, {
    address: Object.assign({}, originalObject.address, {
      details: ["5", ...originalObject.address.details.slice(1)]
    })
  });
  
  console.log(updatedObject);
  console.log("********************"); 
  console.log(updatedObject2);
  