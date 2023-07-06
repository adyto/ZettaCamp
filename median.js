const input = [8, 7, 7, 9, 5, 4, 2, 9];
function result(input) {
  const sortArray = input.sort();
  const middleArray = input.length / 2;

  return sortArray[middleArray];
}

console.log(result(input));
