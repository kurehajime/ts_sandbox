const arr = [3, 1, 4, 1, 5, 9, 2]
const obj = Object.groupBy(arr, (e) => e % 2 === 0 ? "even" : "odd");
obj.toString()
obj?.toString()