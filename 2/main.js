function squareRootOfSumOfSquares() {
    var numbers = [];
  
    var input = prompt("Enter numbers separated by commas:");
  
    var numberStrings = input.split(",");
    for (var i = 0; i < numberStrings.length; i++) {
      var number = parseFloat(numberStrings[i]);
      if (!isNaN(number)) {
        numbers.push(number);
      }
    }
  
    var sumOfSquares = 0;
  
  
    for (var i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    var result = Math.sqrt(sumOfSquares);
    return result;
  }
  
  var result = squareRootOfSumOfSquares();
  console.log(result);