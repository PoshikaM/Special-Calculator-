// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo) {
  Answer =
    numberOne < 0 || numberTwo < 0
      ? 'Negative numbers are not allowed'
      : numberOne - numberTwo;
  return Answer;
}

// Progression 2: Create simple division

function simpleDivision(numberOne, numberTwo) {
  division = numberOne / numberTwo;
  divide =
    numberTwo == 0
      ? 'Not a number'
      : numberOne < numberTwo
      ? 'Cannot divide a smaller number by a larger number'
      : numberOne < 0 || numberTwo < 0
      ? 'Negative numbers are not allowed'
      : division;
  return divide;
}

// Progression 3: Create the special calculator

// function specialCalculator(numberOne, numberTwo, operation){}

function specialCalculator(numberOne, numberTwo, operation) {
  switch (operation) {
    case specialAddition:
      return specialAddition(numberOne, numberTwo);
    case simpleDivision:
      return simpleDivision(numberOne, numberTwo);
  }
}
