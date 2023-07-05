function transform(nums) {
  const squaredNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    const squared = nums[i] * nums[i];
    squaredNumbers.push(squared);
  }
  return squaredNumbers.sort((a, b) => a - b);

  /*
  return nums.map(num => num*num).sort((a, b) => a - b);
  map allows u to iterate in an array
  map returns a value in the array
  */
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]