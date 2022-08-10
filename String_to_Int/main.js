var myAtoi = function(s) {
  const acceptableChars = "0123456789+-"
  let trimdS = s.trim()
  if (acceptableChars.indexOf(trimdS[0]) === -1) return 0
  
  const stringNumbers = '0123456789'
  const minValue =  Math.pow(-2, 31)
  const maxValue =  Math.pow(2, 31) - 1
  let rezDigit = 0
  let digitArray=[]
  let posOrNeg = trimdS[0] === '-' ? -1 : 1
  for (let index = 0; index < trimdS.length; index++) {
    const isNumber = stringNumbers.indexOf(trimdS[index])
    if (isNumber === -1 ) {
      if ((trimdS[index] !== '-' && trimdS[index] !== '+') || index !== 0) {
        break
      } else {
        continue
      }
    }
    digitArray.push(isNumber)
  }

  digitArray.forEach((digit, index) => {
    rezDigit += digit * Math.pow(10, digitArray.length-index-1)
  });

  rezDigit = posOrNeg * rezDigit

if (rezDigit > maxValue) {
  return maxValue
}
if (rezDigit < minValue) {
  return minValue
}

  return rezDigit
};

console.log(myAtoi(" -4234f"))