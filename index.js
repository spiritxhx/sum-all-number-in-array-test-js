function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((element) => {
    
    if (Array.isArray(element)) {
      // Print out all it's items individually
      sum += sumItems(element);
    } else {
      sum += element;
    }
  });
  return sum;
}

module.exports = sumItems;