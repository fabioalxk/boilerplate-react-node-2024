function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

function twoSumHashmap(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    // target - numero atual = numero
    const complement = target - nums[i];

    if (hashmap[complement] !== undefined) {
      return [hashmap[complement], i];
    }

    hashmap[nums[i]] = i;
  }

  return null;
}

const nums = [5, 2, 3];
const target = 8;

// console.log(twoSum(nums, target));
console.log(twoSumHashmap(nums, target));

//Output: [1, 2]
